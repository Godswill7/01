import { createSlice } from '@reduxjs/toolkit'

const initialState = {
appUser: "" || null
}

const GlobalState = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    createUser: ((state: any,{payload}: any) => {
        state.appUser =payload
    }),

    logOut: (state: any) => {
        state.appUser = null
    }
  },
});

export const {logOut, createUser} = GlobalState.actions

export default GlobalState.reducer