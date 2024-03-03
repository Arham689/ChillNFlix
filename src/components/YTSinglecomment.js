import React, { useState } from 'react'
import YTCommentsContainer from './YTCommentsContainer'

const YTSinglecomment = ({data}) => {
    const [isDescVisible , setIsDescVisible ] = useState(false)
    const sinppet = data.snippet
    const stat  = data.statistics
    const smallDesc = sinppet.description.substr(0 , 150)
  return (
    <div>
      <div className='sm:w-[70vw]'>
        <h1 className='ml-2 font-bold sm:text-3xl'>
          {sinppet.title }
        </h1>
        <pre onClick={()=>{setIsDescVisible(true)}} className=' cursor-pointer text-sm sm:text-lg mt-3 p-2 rounded-xl mx-3 whitespace-pre-wrap bg-[#414141]' >
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
