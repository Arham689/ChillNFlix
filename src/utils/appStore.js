import {configureStore} from '@reduxjs/toolkit'
import  userReducer   from './userSlice'; 
import moviesReducer  from './moviesSlice';
import gptReducer from './gptSlice';
import appSettingReducer from './appSetting';
import YtSideSilce from './YtSideSilce';
import YTSearch from './YTSearch';
import YTsearchedDataSlice from './YTsearchedDataSlice';
const appstore = configureStore(
    {
        reducer: {
            user : userReducer,
            movies : moviesReducer ,
            gpt : gptReducer,
            lang : appSettingReducer,
            sidebar : YtSideSilce,
            cache : YTSearch,
            YTsearchList : YTsearchedDataSlice,
        }
    }
)

export default appstore;