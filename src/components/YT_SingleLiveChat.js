
import React from 'react'

const YT_SingleLiveChat = ({chat}) => {
   const {snippet , authorDetails} = chat 
   console.log(chat);
  return (
    <div className='flex border mx-1 my-2 rounded-xl gap-2 border-[#6b6b6b]'>
        <div className=' items-center text-[#767575]'>
            <img className='h-10 rounded-full ' src={authorDetails?.profileImageUrl} alt="" />
        </div>
        <div className='flex-1'>
            <h1 className=' text-[#6b6b6b]'>{authorDetails?.displayName}</h1>
        {snippet?.superChatDetails ? <div className=' p-1 font-bold bg-[red] rounded-lg text-white '><div>{snippet?.superChatDetails?.amountDisplayString}</div><div className='p-1'>{snippet?.superChatDetails?.userComment}</div></div> : snippet?.displayMessage}

        </div>
    </div>
  )
}

export default YT_SingleLiveChat
