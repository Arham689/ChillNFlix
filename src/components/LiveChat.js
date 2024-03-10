import React, { useRef, useState, useEffect } from 'react'
import { YTAPI_KEY } from '../utils/constants'
import YT_SingleLiveChat from './YT_SingleLiveChat'
const LiveChat = ({liveCahtId}) => {
  
  const [isChatVisible , setIsChatVisible ] = useState(true)
  const handelShowChat = ()=>{setIsChatVisible(!isChatVisible)}
  // console.log(liveCahtId)
  const chatContainerRef = useRef(null)
  console.log(chatContainerRef.current)
  const [chat  , setChat ] = useState([])    
  const getLiveChat  = async (liveCahtId) =>{
    try {
      
    const data = await fetch(`https://www.googleapis.com/youtube/v3/liveChat/messages?liveChatId=${liveCahtId}&part=snippet,authorDetails&maxResults=2000&pollingIntervalMillis=1&key=${YTAPI_KEY}`)
    const josn = await data.json() ;
    console.log(josn.items)
    setChat(josn.items)
    } catch (error) {
        console.error('live chat error ' , error)
    }
    
  }
  if(liveCahtId && isChatVisible )
  {
    // getLiveChat(liveCahtId) 
  }

  useEffect(() => {
    console.log("useEffect triggered");
    scrollToBottom();
}, [chat]);

const scrollToBottom = () => {
  console.log('bottom called ')
  // this if () will return 'true' when we are close to the bottom 
  // if(chatContainerRef.current)
if(Math.abs(chatContainerRef?.current?.scrollHeight - chatContainerRef?.current?.clientHeight - chatContainerRef?.current?.scrollTop) <= 200)
  chatContainerRef?.current?.scrollTo(0 , chatContainerRef.current.scrollHeight )
};

const handleMouseEnter = () => {
  // Disable scrolling on body when hovering over the chat container
  document.body.style.overflow = 'hidden';
};

const handleMouseLeave = () => {
  // Re-enable scrolling on body when leaving the chat container
  document.body.style.overflow = 'auto';
};
  return (
    chat?.length === 0  ? <div>loading </div> : 
    <div className=' my-3  '>
      {isChatVisible ? <div  className='lg:mt-20 relative mx-5 border h-[550px] w-[90vw] lg:w-[22vw] border-[#727272] rounded-lg flex justify-between'>
          <div ref={chatContainerRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='m-2 scroll-smooth overflow-y-scroll overflow-x-hidden  w-[90vw] lg:w-[22vw]'>Live Caht 
            <hr />
            {chat.map(c=><YT_SingleLiveChat key={c.id} chat = {c}/>)}
          </div>
          <span onClick={handelShowChat} className=' absolute top-0 right-0 text-2xl m-2'> &#88;</span>

        </div>:<h2 onClick={handelShowChat} className='  lg:mt-20 border p-1 flex justify-center lg:mx-5 mt-3 mx-auto w-[90vw] lg:w-[22vw] bg-[#6e6e6e] border-[#727272] rounded-3xl'>show chat </h2> }
    </div>
  )
}

export default LiveChat
