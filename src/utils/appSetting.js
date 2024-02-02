import { createSlice } from "@reduxjs/toolkit";

const appSettings = createSlice(
    {
        name: "lang",
        initialState : {
            lang : "en"
        },
        reducers : {
            changeLang : (state , action) =>{
                state.lang = action.payload
            }
        }   
    }
)

export const {changeLang  } = appSettings.actions


export default appSettings.reducer