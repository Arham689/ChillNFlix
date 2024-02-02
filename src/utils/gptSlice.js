import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice(
    {
        name:'GptSlice',
        initialState : {
            isGptOpened : false
        },
        reducers:{
            toggleGptView : (state)=>{
                state.isGptOpened = !state.isGptOpened
            }
        }
    }
)


export const {toggleGptView} = GptSlice.actions

export default GptSlice.reducer 