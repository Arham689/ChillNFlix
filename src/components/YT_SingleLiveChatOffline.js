import React from 'react'

const YT_SingleLiveChatOffline = ({chat}) => {
  return (
    <div>
      <div className='flex border mx-1 my-2 rounded-xl gap-2 border-[#6b6b6b]'>
        <div className=' items-center text-[#767575]'>
            <img className='h-10 rounded-full ' src={chat.img} alt="" />
        </div>
        <div className='flex-1'>
            <h1 className=' text-[#6b6b6b]'>{chat.name}</h1>
        { chat.text}

        </div>
    </div>
    </div>
  )
}

export default YT_SingleLiveChatOffline
