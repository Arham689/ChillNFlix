import React from 'react'
import MovieCard from './MovieCard'
const MovieList = ({title , movies }) => {
  return (
    <div className=' text-[white] font-bold text-4xl'>

        <h1 className='ml-5'>{title}</h1>
        <div className=' flex overflow-scroll'>
            <div className=' flex shrink-0  '>
            {movies && movies.map((movie)=> <MovieCard key={movie.id} poster = {movie.poster_path}/>)}
            </div>
        </div>
    </div>
  )
}

export default MovieList
