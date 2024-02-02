import React from 'react'
import logo from '../assets/background-flix.jpeg'
import {langFullForm} from '../utils/langConfig'
import { useSelector } from 'react-redux'
const GptSearch = () => {
  const currentLnag  = useSelector(store => store.lang.lang)
  return (
    <div className=' z-30 text-white pt-16 bg-black  md:bg-[#00000097] h-screen '>
        <img src={logo} alt="eeheh"  className=' hidden md:block -z-20 absolute'/>
        <div className='mt-11 flex justify-center'>
        <input placeholder={langFullForm[currentLnag].inputPlaceholder} className=' p-3 text-[black] h-10 bg-[#ffffff] rounded-md md:w-96' type="text"   />
        <button className='ml-3 font-bold text-white bg-[#c72727d5] h-10 w-16 rounded-md md:w-24 active:bg-[#4f4f4fad] '>{langFullForm[currentLnag].search}</button>
        </div>
        <div className=' w-screen bg-[#ffffff95] mt-3  h-[1px] '></div>
    </div>
  ) 
}

export default GptSearch
