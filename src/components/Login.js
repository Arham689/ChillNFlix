import React, { useState , useRef } from 'react'
import Header from './Header'
import baclground from '../assets/background-flix.jpeg'
import { validateFrom } from '../utils/validation'
const Login = () => {
  const [FormStatus , setFormStatus] = useState(false)
  const [message , setMessage] = useState(null)
  const toggleStatus = () =>{
    setFormStatus(!FormStatus)
  }
  
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const Hendelsigninbutton = ()=>{
    // console.log(password);
    setMessage(validateFrom(password.current.value , email.current.value , name.current.value));
  }
  return (
    <div className=''>
        <Header/>
        {/* form validation  */}
        <img className='hidden md:block select-none  absolute -z-10 h-svh w-svw object-coverx' src={baclground} alt="" />
        <div className=' absolute mt-[50vh] translate-y-[-50%] ml-[50%] translate-x-[-50%]'>
          <div className=' bg-black md:bg-[#000000c9] h-screen md:h-[650px] w-screen md:w-[450px] '>
            <div className='p-[4rem]'>
              <form  onSubmit={(e)=>{e.preventDefault()}}>
                <h1 className=' text-white text-4xl mb-10'>{FormStatus ?"Sign Up" : "Sign In"}</h1>
                {
                  FormStatus && 
                    <input ref={name}
                    className=' p-4  w-full h-12 mb-4 rounded-md bg-[#333333] text-white ' 
                    placeholder='Enter Your name' 
                    type="text" />}

                <input ref={email} 
                className=' p-4 w-full h-12 mb-4 rounded-md bg-[#333333] text-white ' 
                placeholder='Email or Phone number' 
                type="text" />
                <br />
                <input ref={password} 
                className='text-white p-4 w-full h-12 rounded-md mb-10 bg-[#333333]' 
                placeholder='Password' 
                type="password" 
                name="pass" />
                <p className='font-bold mb-2 text-[#ff6600c8]'>{message}</p>
                <button onClick={Hendelsigninbutton}  className=' bg-[red] w-full h-12 active:bg-black active:border-2 border-red rounded-md text-white text-bold'>{FormStatus ? "Sign Up" :"Sign In"}</button>
                <p onClick={toggleStatus} className=' text-[#8c8c8c] pt-9'>{FormStatus ? "Already have a Account ?" :"New to Chil N Flix?"} <span className=' text-white hover:underline cursor-pointer'> {FormStatus ? "Sign In Now" :"Sign Up"}</span></p>

              </form>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Login
