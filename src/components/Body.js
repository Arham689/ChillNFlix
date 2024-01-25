import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { onAuthStateChanged  } from 'firebase/auth'
import { useDispatch  } from 'react-redux'
import { adduser, removeuser } from '../utils/userSlice'
const Body = ()=>{
    const dispatch = useDispatch();
    const myrouter = createBrowserRouter([
        {
          path:'/',
          element:<Login/>
        },
        {
          path : '/browse',
          element : <Browse/> 
        }
      ])

      useEffect(()=>{
        // we can do this login at the onClick of the sign in/up button but it is a good practice 
        //onAuthStateChanged is kind of a event listner that's why we are adding this only once 
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // when use will sign in or sign up this if will be called 
            const {uid , email , displayName} = user;
            dispatch(adduser({uid : uid , email : email , displayName : displayName}))
             

          } else {
            // User is signed out
            dispatch(removeuser())
           
          }
        });
        
      } ,[])
      

    return(
        <>
            <RouterProvider router={myrouter}/>
        </>
    )
}

export default Body