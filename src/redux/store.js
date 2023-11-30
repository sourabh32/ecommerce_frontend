import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice.js"
import cartReducer from "./cartSlice.js"
const store  = configureStore({
    reducer: {userReducer,cartReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true,
  
})

export default store