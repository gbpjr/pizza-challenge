import { configureStore } from '@reduxjs/toolkit'

import queueReducer from './queueSlice'
import pizzasReducer from './pizzasSlice'

const store = configureStore({
  reducer: {
    queue: queueReducer,
    pizzas: pizzasReducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch