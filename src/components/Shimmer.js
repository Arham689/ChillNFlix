import React from 'react'
import './shimmer.css'
const Shimmer = () => {
  return (
    <div className='z-40x bg-black md:bg-[#00000097] overflow-scroll w-auto'>
    <div id="container" className='flex gap-10 mb-10 pt-10 mx-auto'>
        <div id="square" className="shimmer"></div>
        <div id="square" className="shimmer"></div>
        <div id="square" className="shimmer"></div>
    </div>
    <div id="container" className='flex gap-10 mb-10 overflow-scroll'>
        <div id="square" className="shimmer"></div>

        <div id="square" className="shimmer"></div>
    </div>
    <div id="container" className='flex gap-10 mb-10 overflow-scroll'>
        <div id="square" className="shimmer"></div>
        <div id="square" className="shimmer"></div>
        <div id="square" className="shimmer"></div>
        <div id="square" className="shimmer"></div>
    </div>
   
    </div>
    
  )
}

export default Shimmer
