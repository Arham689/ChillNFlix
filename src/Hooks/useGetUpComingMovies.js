import { useDispatch, useSelector } from "react-redux"
import { options } from "../utils/constants"
import { addUpcomming } from "../utils/moviesSlice"
import { useEffect } from "react"


const useGetUpComingMovies = () => {
    const upcommingmovies = useSelector(store => store.movies.Upcomming)
    const dispatch = useDispatch()

    const getdata = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1' , options)
        const json = await data.json() 

        dispatch(addUpcomming(json.results))
    }

    useEffect(()=>{
       !upcommingmovies && getdata();
    }, [])
}

export default useGetUpComingMovies
