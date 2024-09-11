import { configureStore } from "@reduxjs/toolkit";
import user from "../features/userSlice"

const combinedReducer = {
    user
};

export const store = configureStore({
    reducer: combinedReducer,
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch