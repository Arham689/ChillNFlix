import { useEffect, useState } from 'react'

const useGetSuggetions = (term) => {
  const [suggetions, setSuggetions] = useState([])
  
  const getdata =  () => {
    // const data = await fetch("https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=" + term )
    fetch('http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=' + term)
      .then(response => response.text())
      .then(data => {
        // Extract the JSON part from the response
        const startIndex = data.indexOf('['); // Find the start of JSON data
        const jsonStr = data.substring(startIndex); // Extract JSON string
        const suggestions = JSON.parse(jsonStr)[1]; // Parse JSON and access suggestions array

        // Log the suggestions
        setSuggetions(suggestions)
          // console.log(suggestions);

        // Process the suggestions as needed
      })
      .catch(error => console.error('Error:', error));
  }

  useEffect(() => {
    const timeOutId = setTimeout(()=>{
      getdata()
      console.log('api called');
    },250);
    return ()=>{clearTimeout(timeOutId)}
  }, [term])

  
  return suggetions
}

export default useGetSuggetions 