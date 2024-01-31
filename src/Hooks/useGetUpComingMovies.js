import { useDispatch } from "react-redux"
import { options } from "../utils/constants"
import { addUpcomming } from "../utils/moviesSlice"
import { useEffect } from "react"


const useGetUpComingMovies = () => {
    const dispatch = useDispatch()

    const getdata = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US' , options)
        const json = await data.json() 

        dispatch(addUpcomming(json.results))
    }

    useEffect(()=>{
        getdata();
    }, [])
}

export default useGetUpComingMovies
