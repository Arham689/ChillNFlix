import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice(
    {
        name:'GptSlice',
        initialState : {
            isGptOpened : false,
            GptResArray : null , 
            SearchedMoviesList : null 
        },
        reducers:{
            toggleGptView : (state)=>{
                state.isGptOpened = !state.isGptOpened
            },
            addGptResArray : (state , action ) => {
                state.GptResArray = action.payload
            },
            addSearchedMoviesList : (state , action )=>{
                state.SearchedMoviesList = action.payload
            }
        }
    }
)


export const {toggleGptView , addGptResArray , addSearchedMoviesList } = GptSlice.actions

export default GptSlice.reducer 