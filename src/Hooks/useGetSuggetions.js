import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {createCacha } from '../utils/YTSearch'
const useGetSuggetions = (term) => {
  const [suggetions, setSuggetions] = useState([])
  const searchCache = useSelector(store => store.cache.cacheItems)
  const dispatch = useDispatch()
  const getdata =  () => {
    // const data = await fetch("https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=" + term )
    fetch('http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=' + term)
      .then(response => response.text())
      .then(data => {
        // Extract the JSON part from the response
        const startIndex = data.indexOf('['); // Find the start of JSON data
        const jsonStr = data.substring(startIndex); // Extract JSON string
        const suggestions = JSON.parse(jsonStr)[1]; // Parse JSON and access suggestions array
        console.log(suggestions)
        // Log the suggestions
        setSuggetions(suggestions)
        //calling crateCashe to make cache
        dispatch(createCacha( {[term] : suggestions}))
      })
      .catch(error => console.error('Error:', error));
  }

  useEffect(() => {
    const timeOutId = setTimeout(()=>{
      //if the term is present in the cache the dont make a call 
      if(searchCache[term])
      {
        setSuggetions(searchCache[term])
      }
      else
      {
        getdata()
        console.log('api called - '+ term);
      }
    },250);
    return ()=>{clearTimeout(timeOutId)}
  }, [term])

  
  return suggetions
}

export default useGetSuggetions 