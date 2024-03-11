import React, { useState , useEffect } from 'react'
import YTCommentsContainer from './YTCommentsContainer'
import { YTAPI_KEY } from '../utils/constants'
const YTSinglecomment = ({data}) => {
    const [isDescVisible , setIsDescVisible ] = useState(false)
    const [detaileData , setDetaileData] = useState(null)
    // console.log(data)
    const sinppet = data.snippet
    const stat  = data.statistics
    const smallDesc = sinppet.description.substr(0 , 150)
  return (
    <div>
      <div className='lg:w-[70vw]'>
        <h1 className='ml-2 font-bold sm:text-3xl'>
          {sinppet.title }
        </h1>
        <h1 className='ml-2 font-bold sm:text-3xl'>
         {stat?.viewCount && <div>{stat?.viewCount} views ||{stat?.likeCount} likes </div>}
        </h1>
        <pre onClick={()=>{setIsDescVisible(true)}} className=' cursor-pointer text-sm lg:text-lg mt-3  rounded-xl mx-3 p-3 whitespace-pre-wrap bg-[#414141]' >
          {isDescVisible ? <div>
            {sinppet.description}  
            
          </div>: smallDesc + "...MORE"}
          
        </pre>
                {isDescVisible && <div onClick={()=>{setIsDescVisible(false)}} className=' m-3 cursor-pointer active:bg-[#484848]'>
                    show less
                </div>}
        </div>
        
        <div className='p-3'>
           <YTCommentsContainer/>
        </div>
    </div>
  )
}

export default YTSinglecomment
