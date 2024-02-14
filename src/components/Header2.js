import React from 'react'
import logo from '../assets/Netflix_Logo_PMS.png'
import { NavLink } from 'react-router-dom'
const Header2 = () => {
    
  return (
    <div>
        <div className="flex w-screen justify-between fixed bg-gradient-to-b from-black via-[black] ">
        <img className='w-24  md:w-56' src={logo} alt="logo" />
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
  )
}

export default Header2
