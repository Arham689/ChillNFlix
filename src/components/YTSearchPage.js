import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {YT_Searchapi} from '../utils/constants'
import YTheader from './YTheader'
import YTSingleSearchedResult from './YTSingleSearchedResult'
import { useDispatch, useSelector } from 'react-redux'
import { addList  } from '../utils/YTsearchedDataSlice'
import ScrollOnTop from './ScrollOnTop'
import Shimmer2 from './Shimmer2'
const YTSearchPage = () => {
    const dispatch = useDispatch()
    const location = useLocation() 
    const listData = useSelector( store => store.YTsearchList.list)
    // console.log(listData);
    const term =  location.state.term
    const getdata = async ()=>{
        try {
            const data = await fetch(YT_Searchapi + term)
            const json = await data.json()
            dispatch(addList(json?.items))
            // console.log(json?.items)
        } catch (error) {
            console.log(error);
        }
        
    }
    useEffect(()=>{
        getdata()
    } , [term] )

    if(!listData) return null

 
  return (listData.length === 0 ? <Shimmer2/> :
    <div className='bg-black'>
        <ScrollOnTop/>
        <YTheader/>
        <div className='pt-20 text-white max-w-[1100px] -z-10 mx-auto flex flex-col items-center justify-center'>
            {
                listData.map((list)=><Link key={list.etag} to={'/TYBrows/' + list.id.videoId} state={{itemData : list }}><YTSingleSearchedResult  searchedData = {list}/></Link>)
            }
        
        </div>
    </div>
  )
}

export default YTSearchPage
