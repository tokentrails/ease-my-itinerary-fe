import { configureStore } from '@reduxjs/toolkit'
import userSlice from './user-slice'
import itinerart from "./itinerary-slice"
export const store = configureStore({
  reducer: {
    user: userSlice,
    itinerary:itinerart

  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch