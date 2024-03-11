import { createSlice  } from "@reduxjs/toolkit";

const offlineChatSlice = createSlice({
        name : 'offlineChatSlice',
        initialState : {
            chat : []
        },
        reducers : {
            addCaht : (state , action ) =>{
                state.chat.push(action.payload)
            },
            clearChat : (state  )=>{
                state.chat = []
            },
            removeSingleChat : (state , action ) => {
                state.chat.splice(0 , state.chat.length - 75) 
            }
        }
    })

export const {addCaht , clearChat , removeSingleChat} = offlineChatSlice.actions;
export default offlineChatSlice.reducer ;