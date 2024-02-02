import {configureStore} from '@reduxjs/toolkit'
import  userReducer   from './userSlice'; 
import moviesReducer  from './moviesSlice';
import gptReducer from './gptSlice';
import appSettingReducer from './appSetting';
const appstore = configureStore(
    {
        reducer: {
            user : userReducer,
            movies : moviesReducer ,
            gpt : gptReducer,
            lang : appSettingReducer
        }
    }
)

export default appstore;