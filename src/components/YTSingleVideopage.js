import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import YTheader from './YTheader'
import YTSinglecomment from './YTSinglecomment'
import ScrollOnTop  from './ScrollOnTop'
const YTSingleVideopage = () => {
  const location = useLocation() ;
  console.log(location)
  const data = location.state.itemData
  const {id} = useParams()
  return (
    <div className='text-white bg-black'>
      <ScrollOnTop/>
      <YTheader/>
      <div className='mt-19 justify-between flex'>
        <iframe  
        className='  w-screen aspect-video md:w-[70vw] md:h-auto'
        src={"https://www.youtube.com/embed/"+ id + "?&autoplay=1&mute=1&rel=0&modestbranding=1&loop=1"} 
        ></iframe>  
        <div className=' mt-20 mx-10  flex-1 border border-[#727272] rounded-lg '>
          live chat 
        </div>
      </div>
      
      <div className='' >
        <YTSinglecomment data = {data}/>
      </div>
    </div>
  )
}

export default YTSingleVideopage
