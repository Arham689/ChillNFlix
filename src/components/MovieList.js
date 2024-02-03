import React from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'
const MovieList = ({title , movies }) => {
  return (
    <div className=' text-[white] font-bold text-4xl pb-8'>

        <h1 className='ml-5'>{title}</h1>
        <div className=' flex overflow-scroll'>
            <div className=' flex shrink-0  '>
            {movies && movies.map((movie)=> <Link to={'/info/'+movie.id} key={movie.id}><MovieCard  poster = {movie.poster_path}/></Link>)}
            </div>
        </div>
    </div>
  )
}

export default MovieList
