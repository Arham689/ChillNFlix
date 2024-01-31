import React from 'react'

const VideoTitle = ({title , descrepiton}) => {
  return (
    <div className= 'text-[#ffffff67] flex-col h-screen absolute flex justify-center'>
        <div className=' -z-10 absolute w-screen h-screen bg-[#0000007d]'></div>
        <h1 className=' z-10 ml-12 text-3xl md:text-6xl font-bold  mb-4'>{title}</h1>
        <h2 className=' z-10 ml-12 hidden md:block w-[450px] text-xl'>{descrepiton}</h2>
    </div>
  )
}

export default VideoTitle
