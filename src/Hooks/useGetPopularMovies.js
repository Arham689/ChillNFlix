import { options } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { addPopular } from "../utils/moviesSlice"

const useGetPopularMovies = () => {
    const popularmovies = useSelector(store => store.movies.Popular)
    const dispatch = useDispatch()
    const getdata = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/discover/tv?include_adult=true&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc' , options)
        const json = await data.json()

        dispatch(addPopular(json.results))
    }

    useEffect(()=>{
       !popularmovies && getdata()
    } , [])

}

export default useGetPopularMovies
