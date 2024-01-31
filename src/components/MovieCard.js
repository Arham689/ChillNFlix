import React from 'react'
import {TMDB_IMG_URL} from '../utils/constants'
const MovieCard = ({poster}) => {
  return (
    <div className='mr-5 cursor-pointer  ' >
        <img className=' rounded-lg h-80 ' src={TMDB_IMG_URL + poster} alt="hahah" />
    </div>
  )
}

export default MovieCard
