import React from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

const Body = ()=>{
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

    return(
        <>
            <RouterProvider router={myrouter}/>
        </>
    )
}

export default Body