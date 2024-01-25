import React from "react";
import logo from '../assets/Netflix_Logo_PMS.png'
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import {useDispatch} from 'react-redux'
import { removeuser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handelSignOUt = ()=>{
        signOut(auth).then(() => {
        // Sign-out successful.
        dispatch(removeuser())
        navigate('/');
        }).catch((error) => {
        // An error happened.
        });
    }
    return (
        <>
        <div className="flex justify-between">
            <img width={220} src={logo} alt="logo" />
            <div className="flex items-center">
                <img
                    className="m-2"
                    src="https://api.dicebear.com/7.x/bottts-neutral/svg?seed=Tigger&size=50&radius=10"
                    alt="avatar" 
                />
                <button className="text-[#ffffffd3] w-[90px] p-1 rounded-sm mr-3 bg-[#000000] h-9"
                        onClick={handelSignOUt}
                >Sign out</button>
            </div>
        </div>
            
            
        </>
    )
}

export default Header