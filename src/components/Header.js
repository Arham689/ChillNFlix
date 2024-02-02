import React, { useEffect } from "react";
import logo from '../assets/Netflix_Logo_PMS.png'
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from 'firebase/auth'
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux'
import { removeuser, adduser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { toggleGptView } from '../utils/gptSlice'
import { avalibleLang } from '../utils/constants'
import {changeLang } from '../utils/appSetting'
const Header = () => {
  const user = useSelector((store) => store.user)
  const isGptVisible = useSelector(store => store.gpt.isGptOpened)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handelSignOUt = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeuser())
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(() => {
    // we can do this login at the onClick of the sign in/up button but it is a good practice 
    //onAuthStateChanged is kind of a event listner that's why we are adding this only once 
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // when use will sign in or sign up this if will be called 
        const { uid, email, displayName } = user;
        dispatch(adduser({ uid: uid, email: email, displayName: displayName }))

        navigate('/browse')
      } else {
        // User is signed out
        dispatch(removeuser())
        navigate('/')
      }
    });
    //this will remove the onAuthStateChanged when ever the component will unmount  
    return () => unsubscribe()

  }, [])

  const ToggleGpt = () => {
    dispatch(toggleGptView())
  }

  const handellang = (e) =>{
    // console.log(e.target.value);
    dispatch(changeLang(e.target.value)) 
  }
  return (
    <>
      <div className="flex w-screen justify-between fixed bg-gradient-to-b from-black via-[black] ">
        <img className='w-24  md:w-56' src={logo} alt="logo" />
        {user && <div className="flex items-center">

          {isGptVisible ? <select onChange = {handellang} className=" text-white mr-4 border  rounded-md bg-black ">
            {avalibleLang.map((lang) => (
              <option key={lang.id} value={lang.name}>{lang.name}</option>
            ))}
          </select > :
            <button className="text-[#ffffffd3] border w-[90px] p-1 rounded-md mr-3 bg-[#000000] h-9"
              onClick={handelSignOUt}
            >Sign out</button>}
          <button onClick={ToggleGpt} className=" text-white mr-4 bg-[#cd1313ce] rounded-lg px-2 md:w-20 active:bg-black h-9">{isGptVisible ? "Home" : "GPT"}</button>
          <img
            className="m-1"
            src="https://api.dicebear.com/7.x/bottts-neutral/svg?seed=Tigger&size=40&radius=10"
            alt="avatar"
          />
        </div>}
      </div>


    </>
  )
}

export default Header