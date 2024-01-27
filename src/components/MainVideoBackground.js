import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
const MainVideoBackground = () => {
    const moviesData = useSelector(store => store.movies?.NowPlayingMovies)

    
    const index = Math.floor((Math.random()*20) )
    //on the very first render the value in the stor is null 
    if(!moviesData) return

    const mainMovie = moviesData[index]
    // console.log(moviesData[index]);
  return (
    <div>
      <VideoTitle title = {mainMovie?.original_title} descrepiton = {mainMovie?.overview}/>
      <VideoBackground id= {mainMovie?.id}/>
    </div>
  )
}

export default MainVideoBackground
