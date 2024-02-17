import React from 'react'
import logo from '../assets/Netflix_Logo_PMS.png'
import logo1 from '../assets/bars-solid.svg'
import { NavLink } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { toggleSideBar } from '../utils/YtSideSilce'
import YTSearch from './YTSearch'
const YTheader = () => {
  const dispatch = useDispatch()

  const toggleBar = () => {
    dispatch(toggleSideBar())
  }

  return (
    <div>
      <div className=''>
        <div className="z-30 sm:overflow-auto  flex w-screen justify-between  fixed bg-gradient-to-b from-black via-[black] ">
          <div className=' flex items-center'>
            <div onClick={toggleBar} className='sm:hover:bg-[#3f3f3f] active:bg-[#ff000052] rounded-[200px] sm:active:bg-black ml-4  p-3'>
              <img className="w-7 h-7  cursor-pointer" src={logo1} alt="" />
            </div>
            <img className='w-12  md:w-56' src={logo} alt="logo" />
          </div>

            <YTSearch/>
          <div className="flex items-center">

            <NavLink to='/browse'><button className=" text-white mr-4 bg-[#cd1313ce] rounded-lg px-2 md:w-20 active:bg-black h-9">home</button></NavLink>
            <img
              className="m-1"
              src="https://api.dicebear.com/7.x/bottts-neutral/svg?seed=Tigger&size=40&radius=10"
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default YTheader
