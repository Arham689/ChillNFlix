import React, {  useRef, useState } from 'react'
import logo from '../assets/background-flix.jpeg'
import {langFullForm} from '../utils/langConfig'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openAi'
import { API_KEY } from '../utils/constants'
import { options } from '../utils/constants'
import { addGptResArray, addSearchedMoviesList } from '../utils/gptSlice'
import GptmovieList from './GptmovieList'
import Shimmer from './Shimmer'
const GptSearch = () => {
  const currentLnag  = useSelector(store => store.lang.lang)
  const [isSearching , setIsSearching] = useState(false)
  const dispatch = useDispatch() 
  const useInput = useRef(null)



  const hangleHit =async ()=>{
    if( useInput.current.value === '' ) return null
    setIsSearching(true)
    const qury = 'Act as a Movie Recommendation system and suggest some movies for the query : ' + useInput.current.value + '. only give me names of 5 movies, comma seperated like the example result given ahead. example : movie1 , movie2 , movie3 , movie4 , movie5 '
    // console.log("input" ,qury);
    // getAiRes(qury);
    
    const gptResults  = await openai.chat.completions.create({
      messages: [{ role: 'user', content: qury }],
      model: 'gpt-3.5-turbo',
    });
    
    // console.log(gptResults.choices[0].message.content);

    let stringResult = gptResults.choices[0].message.content.split(',')

    // console.log(strigresult)

    const SearchedMoviesdata = stringResult.map((movie)=>getdata(movie))

    //promis.all
    const tmdbResults =await Promise.all(SearchedMoviesdata)
    setIsSearching(false)
    // console.log(tmdbResults );

    dispatch(addGptResArray(stringResult))
    dispatch(addSearchedMoviesList(tmdbResults))

  }

  const getdata =async (movie) =>{
      const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' +movie+'&api_key=' + API_KEY , options )
      const json = await data.json() 

      return json.results
  }
  
  return (
    <div className=' z-30 text-white pt-1  bg-black md:bg-[#ffffff00]   h-screen '>
        <img src={logo} alt="eeheh"  className=' blur-sm  hidden  md:block -z-20 fixed'/>
        <div className=' mt-24 flex justify-center'>
        <input ref={useInput} placeholder={langFullForm[currentLnag].inputPlaceholder} className=' p-3 text-[black] h-10 bg-[#ffffff] rounded-md md:w-96' type="text"   />
        <button onClick={hangleHit} className='ml-3 font-bold text-white bg-[#c72727d5] h-10 w-16 rounded-md md:w-24 active:bg-[#4f4f4fad] '>{langFullForm[currentLnag].search}</button>
        </div>
        <div className=' w-screen bg-[#ffffff95] mt-3  h-[1px] '></div>

       {isSearching ?<Shimmer/> :<GptmovieList /> } 
        
    </div>
  ) 
}

export default GptSearch
