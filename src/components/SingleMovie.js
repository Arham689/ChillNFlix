import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_KEY } from '../utils/constants'
import {TMDB_IMG_URL} from '../utils/constants'
import { options } from '../utils/constants'

import Header2 from './Header2'
import ScrollOnTop from './ScrollOnTop'
const SingleMovie = () => {
    const {id} = useParams()
    const [singleMovieInfo , setSingleMovieInfo ] = useState(null)
    const [YT_key , setYT_key] = useState(null)
    const getdata = async ()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
        const json  = await data.json() 

        console.log(json);
        setSingleMovieInfo(json);
    }

    useEffect(()=>{
        getdata() ;
    },[])

        const getVideosOfMainMovie = async (id) =>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);
        const json = await data.json() ; 
        // console.log(json);
        
        const filteredData = json.results.filter((video)=>{return video.type === 'Trailer'})
        // console.log(filteredData)

        const trailerData = filteredData ? filteredData[0] : json.results[0];
        // console.log(trailerData)

        setYT_key(trailerData?.key)
        // const YT_key = trailerData?.key

    }
    
    useEffect(()=>{
        getVideosOfMainMovie(id)
    },[])
        
  return (
    <div className=' bg-black'>
    <ScrollOnTop/>
    <Header2/>
    <div>
        <iframe  
        className=' -z-10 h-[95vh] aspect-video md:w-screen md:h-auto'
        src={"https://www.youtube.com/embed/"+ YT_key + "?&autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&loop=1"} 
        ></iframe>
        <div className=' -mt-14  -z-10 absolute bg-black w-[100%] h-14'></div>
        <img src={TMDB_IMG_URL + singleMovieInfo?.backdrop_path} alt="" />
        <img src={TMDB_IMG_URL + singleMovieInfo?.poster_path} alt="" />
        <div className='overflow-x-hidden'></div>
    </div>
    </div>
    
  )
}

export default SingleMovie
