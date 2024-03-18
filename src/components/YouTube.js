
import { useEffect, useState } from "react"
import Sidebar from "./Sidebar"
import SidebarLogoList from "./SidebarLogoList"
import YTheader from "./YTheader"
import { useSelector } from "react-redux"
import {YT_API} from '../utils/constants'
import YtVideoCard from "./YtVideoCard"
import Shimmer2 from "./Shimmer2"
import ScrollOnTop from './ScrollOnTop'
import {YT_RAMDOM_DATA} from '../utils/constants'
import { Link } from "react-router-dom"
import { generateTopics } from "../utils/helper"
import Shimmer from './Shimmer'
const YouTube = () =>{
    const isSideBarOpen = useSelector(store => store.sidebar.isSideBarOpen)
    const [videoList , setVideoList] = useState([])
    const [isLoading , setIsLoading ] = useState(false)
    const getMoreData = async ()=>{
        setIsLoading(true)
        try {
            const data = await fetch(YT_RAMDOM_DATA + generateTopics())
            const json = await data.json()
            setVideoList(videoList => [...videoList , ...json.items])
        } catch (error) {
            console.log('get more data is not working ' , error)
        }
        finally{
            setIsLoading(false)
        }
    }
    useEffect(()=>{
        const getdata = async () =>{
        const data = await fetch(YT_RAMDOM_DATA + generateTopics())
        const json = await data.json() 
        setVideoList(json.items)
        // console.log(videoList);
    }
        getdata()
    } , [])

    useEffect(()=>{
        const handleScroll = () => {
            const bottom = Math.ceil(window.innerHeight + document.documentElement.scrollTop) >= document.documentElement.offsetHeight;
            if (bottom && !isLoading) {
                getMoreData()
            }
            };
        
            // console.log('bottom')
        window.addEventListener('scroll' , handleScroll)
        return ()=>window.removeEventListener('scroll' , handleScroll)
    },[isLoading])

    if(!videoList) return <h1 className=" font-bold text-5xl">daily limit exceeded of YouTube API🔴🔴</h1>
    return (
        <div className="bg-black ">
            <ScrollOnTop/>
            <YTheader/>
            <div className=" flex pt-24 bg-black">
                <div className="fixed overflow-scroll ">
                {isSideBarOpen ? <Sidebar/> :<SidebarLogoList/>}
                </div>
                <div className={` overflow-scroll text-white ${isSideBarOpen?'sm:pl-64':'sm:pl-16'}`}>
                </div >
                {/* main container videos */}

                { (videoList?.length === 0 ) ? <Shimmer2/> : <div className=" flex gap-5 justify-center flex-wrap">
                {videoList && videoList.map((i )=>{
                   return <Link key={i?.id.videoId}  to={'/TYBrows/' + i?.id?.videoId} state={{itemData : i }}><YtVideoCard  items = {i}/> </Link> 
                }) }
                <div>

                {isLoading && <Shimmer2/>}
                </div>
                </div>}


            </div>
            
        </div>
    )
}

export default YouTube