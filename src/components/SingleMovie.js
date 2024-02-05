import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_KEY } from '../utils/constants'
import {TMDB_IMG_URL} from '../utils/constants'
import { options } from '../utils/constants'
import Footer from './Footer'
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
        if(!json.results) return (<h1>oops some thisn went worng</h1>)
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
    if(!singleMovieInfo) return <h1>data is loading </h1>
  return (
    <div className=' bg-black'>
    <ScrollOnTop/>
    <Header2/>
    <div className='hidden sm:block overflow-x-hidden'>
        <iframe  
        className='overflow-x-hidden -z-10 h-[95vh] aspect-video mx-auto sm:w-[85vw] sm:h-auto'
        src={"https://www.youtube.com/embed/"+ YT_key + "?&autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&loop=1"} 
        ></iframe>

        <div className=' flex mt-9 gap-5 justify-center mb-9 items-center'>

            <div className='text-white w-[40%]'>
                <h1 className=' font-mono  text-7xl'>{singleMovieInfo.title}</h1>
                <h3 className='text-2xl text-[#838383ac]'>{singleMovieInfo.overview}</h3>
                <h4 className='text-bold mb-4'>Rating : <span className='text-[green]'>{singleMovieInfo.vote_count}</span></h4>
                <h3>{singleMovieInfo.genres?.map((tag)=><span key={tag.id} className='bg-[#5b5b5b] p-1 mr-1 rounded-lg'>{tag.name}</span>)}</h3>
            </div>
            <img className=' h-80 rounded-md ' src={TMDB_IMG_URL + singleMovieInfo?.backdrop_path} alt="" />

        </div>

    </div>

        <div className='max-w-sm mx-auto block sm:hidden '>
            <img className='mb-4' src={TMDB_IMG_URL + singleMovieInfo?.poster_path} alt="" />
            <div className='text-white '>
                <h1 className=' font-mono  text-5xl'>{singleMovieInfo.title}</h1>
                <h3 className='text-2xl text-[#838383ac]'>{singleMovieInfo.overview}</h3>
                <h4 className='text-bold mb-4'>Rating : <span className='text-[green]'>{singleMovieInfo.vote_count}</span></h4>
                <h3>{singleMovieInfo.genres?.map((tag)=><span key={tag.id} className='bg-[#5b5b5b] p-1 mr-1 rounded-lg mb-2'>{tag.name}</span>)}</h3>
            </div>
            <iframe  
            className=' mx-auto w-[80vw] h-[12rem] mb-9 rounded-md mt-5'
            src={"https://www.youtube.com/embed/"+ YT_key + "?&autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&loop=1"} 
            ></iframe>
        </div>
       
        <Footer/>
    </div>
    
  )
}

export default SingleMovie
