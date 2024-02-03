import { useDispatch, useSelector } from "react-redux"
import {useEffect} from "react"
import { options } from "../utils/constants"
import { addNowPlayingMovies } from '../utils/moviesSlice' 
const useGetNowPlayingMovies = () =>{
    const nowplayingmoviesfromstore = useSelector(store => store.movies.NowPlayingMovies)
    const dispatch = useDispatch() 
    // make a call to get the data form   TMDB
    const getMoviesdata = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options)

        const json = await data.json() ;

        // .then(response => response.json())
        // .then(response => console.log(response.results))
        // .catch(err => console.error(err));
    
        dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(()=>{
       !nowplayingmoviesfromstore && getMoviesdata();
    } , [])
}


export default useGetNowPlayingMovies