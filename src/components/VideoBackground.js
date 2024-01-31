import React, { useEffect, useState } from 'react'
import {options} from '../utils/constants'
const VideoBackground = ({id}) => {
        const [YT_key , setYT_key] = useState(null)
        const getVideosOfMainMovie = async () =>{
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
        getVideosOfMainMovie()
    },[])
  return (
    <div className='overflow-x-hidden'  >
      <iframe  
      className=' -z-10 h-[95vh] aspect-video md:w-screen md:h-auto'
      src={"https://www.youtube.com/embed/"+ YT_key + "?&autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&loop=1"} 
      ></iframe>
      <div className=' -mt-14  -z-10 absolute bg-black w-[100%] h-14'></div>
    </div>
  )
}

export default VideoBackground
