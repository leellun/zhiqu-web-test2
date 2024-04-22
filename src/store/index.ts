import { configureStore } from "@reduxjs/toolkit";
import {changeChannel, channelReducer} from './slice'
import userReducer from './reducer'
import moreReducer from './moreReducer'
const store = configureStore({
    reducer: {
        channelReducer,
        userReducer,
        moreReducer
    },
    devTools: true
  });
  export default store;