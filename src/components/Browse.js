import React from 'react'
import Header from './Header'
import useGetNowPlayingMovies from '../Hooks/useGetNowPlayingMovies'
import useGetTopRatedMovies from '../Hooks/useGetTopRatedMovies'
import useGetPopularMovies from '../Hooks/useGetPopularMovies'
import useGetUpComingMovies from '../Hooks/useGetUpComingMovies'
import MainVideoBackground from './MainVideoBackground'
import SecondaryVideoList from './SecondaryVideoList'

const Browse = () => {
  
   useGetNowPlayingMovies()
   useGetTopRatedMovies()
   useGetPopularMovies()
   useGetUpComingMovies()
  return (
    <div>
      <Header/>
      <MainVideoBackground/>
      <SecondaryVideoList/>
    </div>
  )
}

export default Browse
