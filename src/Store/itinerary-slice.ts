import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from './store'
import type { Trip } from '../Helper/ApiResponseInterface'
import { ItineraryInitial } from './itinerary-initial'


const initialState:Trip=ItineraryInitial
const itinerarySlice  =createSlice({
    name:"itinerary",
    initialState:initialState,
    reducers:{
        addTrip:(state,action)=>{
           
             Object.assign(state, action.payload);
        },
        setBookingData:(state,action)=>{
             Object.assign(state, action.payload);
        }
    }
})

export const {addTrip, setBookingData}  = itinerarySlice.actions
export const TripInfo = (state:RootState)=>state.itinerary
export default itinerarySlice.reducer

