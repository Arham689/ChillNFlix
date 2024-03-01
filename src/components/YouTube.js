
import { useEffect, useState } from "react"
import Sidebar from "./Sidebar"
import SidebarLogoList from "./SidebarLogoList"
import YTheader from "./YTheader"
import { useSelector } from "react-redux"
import {YT_API} from '../utils/constants'
import YtVideoCard from "./YtVideoCard"
import Shimmer2 from "./Shimmer2"
import ScrollOnTop from './ScrollOnTop'
import { Link } from "react-router-dom"
const YouTube = () =>{
    const isSideBarOpen = useSelector(store => store.sidebar.isSideBarOpen)
    const [videoList , setVideoList] = useState([])
    
    useEffect(()=>{
        const getdata = async () =>{
        const data = await fetch(YT_API)
        const json = await data.json() 
        setVideoList(json.items)
        // console.log(videoList);
    }
        getdata()
    } , [])

    

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

                { (videoList.length === 0 ) ? <Shimmer2/> : <div className=" flex gap-5 justify-center flex-wrap">
                {videoList && videoList.map((i , index)=>{
                   return <Link key={i.id}  to={'/TYBrows/' + i.id} state={{itemData : i }}><YtVideoCard  items = {i}/> </Link> 
                }) }
                </div>}
                


            </div>
            
        </div>
    )
}

export default YouTube