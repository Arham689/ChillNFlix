import React from 'react'
import './shimmer.css'
const Sidebar = () => {
  return (
    <div className='slide  h-screen text-white -z-10  bg-black'>
      <div className="bg-black text-white h-screen w-screen sm:w-64 flex flex-col ">
      {/* Logo */}
      <div className=" hidden sm:p-4">

      </div>
      
      {/* Navigation */}
      <nav>
        <ul className="p-2">
          <li className="py-2 px-4 flex items-center">
            <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <span>Home</span>
          </li>
          <li className="py-2 px-4 flex items-center">
            <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <span>Trending</span>
          </li>
          <li className="py-2 px-4 flex items-center">
            <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <span>Subscriptions</span>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4">
        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg w-full">Sign Out</button>
      </div>
    </div>

    </div>
  )
}

export default Sidebar
