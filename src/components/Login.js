import React, { useState , useRef , useEffect } from 'react'
import {useDispatch} from 'react-redux'
import baclground from '../assets/background-flix.jpeg'
import { validateFrom } from '../utils/validation'
import {  createUserWithEmailAndPassword  , signInWithEmailAndPassword , updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase'
import { adduser } from '../utils/userSlice';
import Header from './Header';
import {gapi} from 'gapi-script'
import {Clint_ID} from '../utils/constants'
const Login = () => {
  // google OAuth 2.0 ki process 
  useEffect(()=>{
    function start () {
      gapi.client.init({
        Clinentid : Clint_ID,
        scope : '',
      })
    }

    gapi.load('client:auth2' , start)
  }, [])

  
  const [FormStatus , setFormStatus] = useState(false)
  const [message , setMessage] = useState(null)
  const [isCredentialVisible , setIsCredentialVisible] = useState(false)
  const dispatch = useDispatch()
  const toggleStatus = () =>{
    setFormStatus(!FormStatus)
  }
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const Hendelsigninbutton = ()=>{
    // console.log(password);
    const message = validateFrom(password.current.value , email.current.value )
    setMessage(message);

    if(message) return;
    
    if(FormStatus)
    {
      
      // sign up 
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // updating the name 
        updateProfile(user, {
          displayName: name.current.value
        }).then(() => {
          // Profile updated! 
          const {uid , email , displayName} = auth.currentUser;
          //auth.currentUser will get the updated user data 
          dispatch(adduser({uid : uid , email : email , displayName : displayName}))
        }).catch((error) => {
        });
        // console.log(user);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setMessage(errorMessage)
      });
    }
    else
    {
      //sign in 
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setMessage(errorMessage + " "+ errorCode);
      });
    }
    
    
    
  }
  const toggleCredential = ()=>{
      setIsCredentialVisible(!isCredentialVisible)
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
                  <div className=' text-white '>
                  {isCredentialVisible ? <div  className='m-1 ' >
                    <h1>Id :user005@gmail.com</h1>
                    <h1>Password :RGS"4_b#</h1>
                  </div> : <button onClick={toggleCredential} className=' bg-[#494949] rounded-lg p-2 m-1 ' >show Credential</button>
                  }
                  </div>
                  
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default Login
