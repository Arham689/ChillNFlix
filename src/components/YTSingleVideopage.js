import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import YTheader from './YTheader'
import YTSinglecomment from './YTSinglecomment'
import ScrollOnTop  from './ScrollOnTop'
import LiveChat from './LiveChat'
import {YTAPI_KEY} from '../utils/constants'
import YT_LiveCahtoffline from './YT_LiveCahtoffline'
const YTSingleVideopage = () => {
  const location = useLocation() ;
  const data = location.state.itemData
  // console.log(data)
  const [liveCahtId , setLiveChatId ]= useState(null)
  const {id} = useParams()
  const getLiveStreamingDetails =async ()=>{
    
    const liveStreamingData =await fetch(`https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails,snippet&id=${id}&key=${YTAPI_KEY}`) 
    const json =await liveStreamingData.json()
    // console.log(json?.items[0]?.liveStreamingDetails?.activeLiveChatId);
    setLiveChatId(json?.items[0]?.liveStreamingDetails?.activeLiveChatId)
  }
  if(data.snippet.liveBroadcastContent === 'live')
  {
    getLiveStreamingDetails() 
  }


  return (
    <div className='text-white bg-black'>
      <ScrollOnTop/>
      <YTheader/>
      <div className='pt-20 lg:pt-2 justify-center lg:flex'>
        <iframe  
        className='  w-screen aspect-video  lg:w-[70vw] md:h-auto'
        src={"https://www.youtube.com/embed/"+ id + "?&autoplay=1&mute=1&rel=0&modestbranding=1&loop=1"}
        allowFullScreen 
        ></iframe>  
        {liveCahtId ?<LiveChat liveCahtId = {liveCahtId} className=' flex-1'/>:<YT_LiveCahtoffline/>} 
        
      </div>
      
      <div className='' >
        <YTSinglecomment data = {data}/>
      </div>
    </div>
  )
}

export default YTSingleVideopage
