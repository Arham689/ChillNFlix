import { createSlice  } from "@reduxjs/toolkit";

const YtSideBarSlice = createSlice({
    name: "Sidebar", 
    initialState : {
        isSideBarOpen : false
    },
    reducers : {
        toggleSideBar : (state)=>{
            state.isSideBarOpen = (!state.isSideBarOpen)
        }
    }
})

export const {toggleSideBar} = YtSideBarSlice.actions

export default YtSideBarSlice.reducer 