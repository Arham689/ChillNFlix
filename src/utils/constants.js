export const API_KEY = "77786f6caae57af1a9b6d923b133e3a5"
export const API_Read_Access_Token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Nzc4NmY2Y2FhZTU3YWYxYTliNmQ5MjNiMTMzZTNhNSIsInN1YiI6IjY1YWFkYzMyZDk1NDIwMDBjOTIxNjhmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SnxsC0WN1Ejpdu8SEAwi36hIkIT12fDkNLvOSB9U8qs'

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Nzc4NmY2Y2FhZTU3YWYxYTliNmQ5MjNiMTMzZTNhNSIsInN1YiI6IjY1YWFkYzMyZDk1NDIwMDBjOTIxNjhmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SnxsC0WN1Ejpdu8SEAwi36hIkIT12fDkNLvOSB9U8qs'
    }
  };

export const avalibleLang = [
  {id : 'en' , name : "en"},
  {id : 'hindi' , name : "hindi"},
  {id : 'french' , name : "french"},
  {id : 'spanish' , name : "spanish"}

]
  const YTAPI_KEY = "AIzaSyBDab7UvKF8XyL5N4lPz3GN-NkhmK-4_tQ" 

  export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500"

  export const OPENAI_KEY = process.env.REACT_APP_OPENAPI_KEY

  export const YT_FIND_BY_ID_URL = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=' + YTAPI_KEY


  export const YT_API =  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&key=" + YTAPI_KEY 