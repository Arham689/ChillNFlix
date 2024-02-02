import React from 'react'
import Header from './Header'
import useGetNowPlayingMovies from '../Hooks/useGetNowPlayingMovies'
import useGetTopRatedMovies from '../Hooks/useGetTopRatedMovies'
import useGetPopularMovies from '../Hooks/useGetPopularMovies'
import useGetUpComingMovies from '../Hooks/useGetUpComingMovies'
import MainVideoBackground from './MainVideoBackground'
import SecondaryVideoList from './SecondaryVideoList'
import Footer from './Footer'

import { useSelector } from 'react-redux'
import GptSearch from './GptSearch'

const Browse = () => {
  const isGptvisible = useSelector(store => store.gpt.isGptOpened)
  // console.log(isGptvisible);
   useGetNowPlayingMovies()
   useGetTopRatedMovies()
   useGetPopularMovies()
   useGetUpComingMovies()
  return (
    <div>
      <Header/>
      {
        isGptvisible ?<GptSearch/>:<div><MainVideoBackground/>
        <SecondaryVideoList/>
        <Footer/>
        </div>
      }
      
    </div>
  )
}

export default Browse
