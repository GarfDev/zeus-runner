import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import rootReducer from './reducer'

const defaultMiddleware = getDefaultMiddleware({
  serializableCheck: false,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: [...defaultMiddleware],
})

export default store
