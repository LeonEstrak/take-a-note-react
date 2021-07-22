import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initState:{isVisible: boolean}={
    isVisible:false,
}
export const showSlice = createSlice({
    name:"show",
    initialState:initState,
    reducers:{
        toggleShow:(state:{isVisible: boolean})=>{state.isVisible= !state.isVisible},
    }
})

export const selectShow = (state:RootState) => state.show.isVisible

export const { toggleShow } = showSlice.actions
export default showSlice