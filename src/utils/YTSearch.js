import { createSlice } from "@reduxjs/toolkit";

const YTSearch = createSlice(
    {
        name : 'ytsearch',
        initialState : {
            cacheItems : {
            }
        },
        reducers : {
            createCacha : (state , action)=>{
                state.cacheItems = Object.assign({} , action.payload , state.cacheItems)
            }
        }
    }
)

export const {createCacha} = YTSearch.actions

export default YTSearch.reducer

