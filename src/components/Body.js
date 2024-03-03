import React from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter  } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import SingleMovie from './SingleMovie'
import ErrorElement from './ErrorElement'
import YouTube from './YouTube'
import YTSingleVideopage from './YTSingleVideopage'
import YTSearchPage from './YTSearchPage'
const Body = ()=>{
    const myrouter = createBrowserRouter([
        {
          path:'/',
          element:<Login/>,
          errorElement : <ErrorElement/>
        },
        {
          path : '/browse',
          element : <Browse/> ,
          errorElement : <ErrorElement/>
        },
        {
          path : '/info/:id',
          element : <SingleMovie/>,
          errorElement : <ErrorElement/>
        },
        {
          path : "/youtube",
          element : <YouTube/>,
          errorElement : <ErrorElement/>
        },
        {
          path : '/TYBrows/:id',
          element : <YTSingleVideopage/>
        },
        {
          path : '/searchpage',
          element : <YTSearchPage/>
        }

      ])

    return(
        <>
            <RouterProvider router={myrouter}/>
        </>
    )
}

export default Body