import React from 'react'
import Header from './Header'
import useGetNowPlayingMovies from '../Hooks/useGetNowPlayingMovies'

import MainVideoBackground from './MainVideoBackground'
import SecondaryVideoList from './SecondaryVideoList'

const Browse = () => {
  
   useGetNowPlayingMovies()
  return (
    <div>
      <Header/>
      <MainVideoBackground/>
      <SecondaryVideoList/>
    </div>
  )
}

export default Browse
