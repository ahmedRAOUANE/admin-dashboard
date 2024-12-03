"use client";

import { configureStore } from "@reduxjs/toolkit";

import modalSlice from "./modalSlice";
import themeSlice from "./themeSlice";

const store = configureStore({
    reducer: {
        modal: modalSlice,
        theme: themeSlice
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store