import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
const SecondaryVideoList = () => {
  const movielist = useSelector(store => store.movies.NowPlayingMovies)

  const movieListPopular = useSelector( store => store.movies.Popular)

  const movieListTopRated = useSelector( store => store.movies.TopRated)

  const movieLIstUpcoming = useSelector( store => store.movies.Upcomming)
  
  return (
    <div className='bg-black'>
      <div className=' -mt-48 z-10'>
        <MovieList title = {'Now Playing '} movies = {movielist}/>
        <MovieList title = {'Popular'} movies = {movieListPopular}/>
        <MovieList title = {'Top Rated'} movies = {movieListTopRated}/>
        <MovieList title = {'Trending series'} movies = {movieLIstUpcoming}/>
      </div>
        
    </div>
  )
}

export default SecondaryVideoList
