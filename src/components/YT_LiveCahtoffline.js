import React , {useState , useEffect , useRef} from 'react'
import YT_SingleLiveChatOffline from './YT_SingleLiveChatOffline'
import { useDispatch, useSelector } from 'react-redux'
import { addCaht, clearChat , removeSingleChat } from '../utils/offlineCahtSlice'
import { generate , generatetext } from '../utils/helper'
const YT_LiveCahtoffline = () => {
    const dispatch = useDispatch()
    const offlineChat = useSelector(store => store.offlinchat.chat)
    const [isChatVisible , setIsChatVisible ] = useState(true)
    const handelShowChat = ()=>{setIsChatVisible(!isChatVisible)}
    const chatContainerRef = useRef(null)
    const randomenum = ()=>{
        const num = Math.floor(Math.random()*50) + 1
        return  num
    }
    useEffect(() => {
        scrollToBottom();
    }, [offlineChat]);
    useEffect(()=>{
        const i = setInterval(() => {
          if(isChatVisible)
            dispatch(addCaht({name : generate() , img :'https://xsgames.co/randomusers/assets/avatars/pixel/'+ randomenum() +'.jpg' , text :generatetext()}))
          else
          {
          console.log('false')
          }
        }, 1000);

        return ()=>{
            dispatch(clearChat())
            clearInterval(i)
        }
    },[])
    const scrollToBottom = () => {
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
      if(offlineChat.length > 75 && (Math.abs(chatContainerRef?.current?.scrollHeight - chatContainerRef?.current?.clientHeight - chatContainerRef?.current?.scrollTop) <= 60)) 
      {
        dispatch(removeSingleChat())
      }
      if(offlineChat.length === 0) return null
        return (
          <div className=' my-3  '>
            {isChatVisible ? <div  className='lg:mt-20 relative mx-5 border h-[550px] w-[90vw] lg:w-[22vw] border-[#727272] rounded-lg flex justify-between'>
                <div ref={chatContainerRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='m-2 scroll-smooth overflow-y-scroll overflow-x-hidden  w-[90vw] lg:w-[22vw]'>Live Caht 
                  <hr />
                  {offlineChat.map((chat, i )=><YT_SingleLiveChatOffline key={i}  chat ={chat}/>)}
                </div>
                <span onClick={handelShowChat} className=' absolute top-0 right-0 text-2xl m-2'> &#88;</span>
      
              </div>:<h2 onClick={handelShowChat} className='  lg:mt-20 border p-1 flex justify-center lg:mx-5 mt-3 mx-auto w-[90vw] lg:w-[22vw] bg-[#6e6e6e] border-[#727272] rounded-3xl'>show chat </h2> }
          </div>
        )
}

export default YT_LiveCahtoffline
