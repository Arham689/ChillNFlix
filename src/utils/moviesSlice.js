import {createSlice} from '@reduxjs/toolkit'


const movieSlice = createSlice({
    name : 'movies',
    initialState : {
        NowPlayingMovies : null,
        TopRated :null ,
        Popular : null,
        Upcomming : null
    } , 
    reducers : {
        addNowPlayingMovies : (state,action)=>{
            state.NowPlayingMovies =  action.payload
        },
        addTopRated : (state , action) => {
            state.TopRated = action.payload
        },
        addUpcomming : (state , action ) =>{
            state.Upcomming = action.payload
        },
        addPopular : (state , action )=>{
            state.Popular = action.payload
        }
    }
})

export const {addNowPlayingMovies , addTopRated , addUpcomming , addPopular} = movieSlice.actions

export default movieSlice.reducer  ;