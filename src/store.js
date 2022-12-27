import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import appReducer from 'redux/AppSlice'
import authReducer from 'redux/AuthSlice'
import cartReducer from 'redux/CartSlice'

const rootReducer = {
  auth: authReducer,
  cart: cartReducer,
  app: appReducer
}

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: [...getDefaultMiddleware({ serializableCheck: false })]
})

export default store
