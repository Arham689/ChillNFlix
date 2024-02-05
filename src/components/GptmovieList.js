import React from 'react'
import { useSelector  } from 'react-redux'
import MovieList from './MovieList'
import Shimmer from './Shimmer'
const GptmovieList = () => {
    const searchedTitles = useSelector(store => store.gpt.GptResArray)
    const searchedMivesList = useSelector(store => store.gpt.SearchedMoviesList)
    // console.log(searchedMivesList)

   

    if(!searchedTitles ) return null

    

  return <div className='z-40x bg-black md:bg-[#00000097]'>
        {
            searchedTitles.map((title , index )=>{
                return <MovieList key={index} title={title} movies={searchedMivesList[index]}/>
            })
        }
  </div>
}

export default GptmovieList
