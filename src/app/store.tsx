import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./reduxSlices/noteSlice";
import showSlice from "./reduxSlices/showSlice";

export const store = configureStore({
  reducer: {
    notes: noteSlice.reducer,
    show: showSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
