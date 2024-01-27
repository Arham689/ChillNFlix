import React ,{useEffect} from "react";
import logo from '../assets/Netflix_Logo_PMS.png'
import { auth } from "../utils/firebase";
import {onAuthStateChanged} from 'firebase/auth'
import { signOut } from "firebase/auth";
import {useDispatch , useSelector} from 'react-redux'
import { removeuser  , adduser} from "../utils/userSlice";
import { useNavigate  } from "react-router-dom";
const  Header = () => {
    const user = useSelector((store) => store.user)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handelSignOUt = ()=>{
        signOut(auth).then(() => {
        // Sign-out successful.
        dispatch(removeuser())
        }).catch((error) => {
        // An error happened.
        });
    }

    useEffect(()=>{
        // we can do this login at the onClick of the sign in/up button but it is a good practice 
        //onAuthStateChanged is kind of a event listner that's why we are adding this only once 
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            // when use will sign in or sign up this if will be called 
            const {uid , email , displayName} = user;
            dispatch(adduser({uid : uid , email : email , displayName : displayName}))
             
            navigate('/browse')
          } else {
            // User is signed out
            dispatch(removeuser())
            navigate('/')
          }
        });
        //this will remove the onAuthStateChanged when ever the component will unmount  
        return () => unsubscribe()
        
      } ,[])


    return (
        <>
        <div className="flex w-screen justify-between absolute bg-gradient-to-b from-black via-[black] ">
            <img width={220} src={logo} alt="logo" />
            {user && <div className="flex items-center">
                <img
                    className="m-2"
                    src="https://api.dicebear.com/7.x/bottts-neutral/svg?seed=Tigger&size=50&radius=10"
                    alt="avatar" 
                />
                <button className="text-[#ffffffd3] w-[90px] p-1 rounded-sm mr-3 bg-[#000000] h-9"
                        onClick={handelSignOUt}
                >Sign out</button>
            </div>}
        </div>
            
            
        </>
    )
}

export default Header