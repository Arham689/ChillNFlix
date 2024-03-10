import React from 'react'

const YTSingleSearchedResult = ({ searchedData }) => {
  const { id, snippet } = searchedData
  return (
    <div className='sm:flex mx-auto '>
      <div className=' max-w-[425px] rounded-xl'>
        <img className=' rounded-2xl' src={snippet?.thumbnails?.high?.url} alt="" />
      </div>
      <div className=' p-4'>
        <div className=' font-bold text-sm sm:text-xl'>

          {snippet.title}
        </div>
        <div className=' text-gray-600'>
          {snippet.description}
        </div>
        {
          snippet.liveBroadcastContent === 'live' &&<div className=' font-bold w-11 px-1 bg-[#cb1a1a] rounded-lg'>LIVE</div>
        }
        <div>
          {snippet.channelTitle}
        </div>

      </div>
    </div>
  )
}

export default YTSingleSearchedResult
