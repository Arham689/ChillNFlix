import { createSlice } from "@reduxjs/toolkit"

const YTsearchSlice = createSlice({
    name : "YTSearchSlice",
    initialState : {
        list : null 
    },
    reducers : {
        addList : (state , action)=>{
            state.list = action.payload
        }
    }
})

export const {addList} = YTsearchSlice.actions
export default YTsearchSlice.reducer