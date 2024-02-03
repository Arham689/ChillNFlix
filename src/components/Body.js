import React from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter  , BrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import SingleMovie from './SingleMovie'

const Body = ()=>{
    const myrouter = createBrowserRouter([
        {
          path:'/',
          element:<Login/>
        },
        {
          path : '/browse',
          element : <Browse/> 
        },
        {
          path : '/info/:id',
          element : <SingleMovie/>
        }
      ])

    return(
        <>
            <RouterProvider router={myrouter}/>
        </>
    )
}

export default Body