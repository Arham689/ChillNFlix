import {configureStore} from '@reduxjs/toolkit'
import  userReducer   from './userSlice'; 
import moviesReducer  from './moviesSlice';
import gptReducer from './gptSlice';
import appSettingReducer from './appSetting';
import YtSideSilce from './YtSideSilce';
import YTSearch from './YTSearch';
import YTsearchedDataSlice from './YTsearchedDataSlice';
import offlineCahtSlice from './offlineCahtSlice';
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
            offlinchat : offlineCahtSlice,
        }
    }
)

export default appstore;