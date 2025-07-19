import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { enableMapSet } from 'immer';
import userReducer from './user'
import cartReducer from './cart'

// redux global state management
enableMapSet()
const store = configureStore({
  reducer: {
    userInfo: userReducer,
    cartInfo: cartReducer
  },
  // disable serializableCheck
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export default store