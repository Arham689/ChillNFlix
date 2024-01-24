import React, { useState } from 'react'
import Header from './Header'
import baclground from '../assets/background-flix.jpeg'
const Login = () => {
  const [FormStatus , setFormStatus] = useState(false)

  const toggleStatus = () =>{
    setFormStatus(!FormStatus)
  }

  return (
    <div className=''>
        <Header/>
        {/* form validation  */}
        <img className=' select-none  absolute -z-10 h-svh w-svw object-coverx' src={baclground} alt="" />
        <div className=' absolute mt-[50vh] translate-y-[-50%] ml-[50%] translate-x-[-50%]'>
          <div className=' bg-[#000000c9] h-[650px] w-[450px] '>
            <div className='p-[4rem]'>
              <form >
                <h1 className=' text-white text-4xl mb-10'>{FormStatus ?"Sign Up" : "Sign In"}</h1>
                {FormStatus && <input className=' p-4  w-full h-12 mb-4 rounded-md bg-[#333333] text-white ' placeholder='Enter Your name' type="text" />}

                <input className=' p-4 w-full h-12 mb-4 rounded-md bg-[#333333] text-white ' placeholder='Email or Phone number' type="text" />
                <br />
                <input className='text-white p-4 w-full h-12 rounded-md mb-10 bg-[#333333]' placeholder='Password' type="password" name="pass" />
                <button className=' bg-[red] w-full h-12 rounded-md text-white text-bold'>{FormStatus ? "Sign Up" :"Sign In"}</button>
                <p onClick={toggleStatus} className=' text-[#8c8c8c] pt-9'>{FormStatus ? "Already have a Account ?" :"New to Chil N Flix?"} <span className=' text-white hover:underline cursor-pointer'> {FormStatus ? "Sign In Now" :"Sign Up"}</span></p>

              </form>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Login
