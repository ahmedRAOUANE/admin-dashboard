"use client";

import { configureStore } from "@reduxjs/toolkit";

import modalSlice from "./modalSlice";
import themeSlice from "./themeSlice";
import errorSlice from "./errorSlice";
import lodingSlice from "./loadingSlice";

const store = configureStore({
    reducer: {
        modal: modalSlice,
        theme: themeSlice,
        error: errorSlice,
        loading: lodingSlice
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store