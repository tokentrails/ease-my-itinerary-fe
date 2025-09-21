import { createSlice } from '@reduxjs/toolkit'
import type { IUser } from './user-type'
import { UserInitial } from './user-initial'
import type { RootState } from './store'


const initialState:IUser=UserInitial
const userSlice = createSlice({
  name: 'user',
  initialState:initialState,
  reducers: {
    setUserInfo:(state,action)=>{
        state={...action.payload}
        console.log(state)
    }
  },
})
export const { setUserInfo } = userSlice.actions

export const UsetInfo = (state:RootState)=>state.user
export default userSlice.reducer