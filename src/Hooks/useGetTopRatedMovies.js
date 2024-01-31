import { useDispatch } from "react-redux"
import { addTopRated } from "../utils/moviesSlice"
import { options  } from "../utils/constants"
import { useEffect } from "react"

const useGetTopRatedMovies = () => {
    const dispatch = useDispatch() 
     async function  getdata()
    {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1' , options)
        const json = await data.json() ;
        dispatch(addTopRated(json.results))
    }

    useEffect(()=>{
        getdata()
    },[])
  
}

export default useGetTopRatedMovies
