import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./reduxSlices/noteSlice";

export const store = configureStore({
    reducer:{
        notes:noteSlice.reducer,
    }
});

export type RootState = ReturnType <typeof store.getState>

export type AppDispatch = typeof store.dispatch