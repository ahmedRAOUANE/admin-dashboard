"use client";

import { ThemeType } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StateType {
    currentTheme: ThemeType
}

// Helper function to get the initial theme
const getInitialTheme = (): ThemeType => {
    if (typeof window !== "undefined") {
        return (localStorage.getItem("theme") as ThemeType) || "light";
    }

    return "light"; // Default theme for server-side rendering
};

const initialState: StateType = {
    currentTheme: getInitialTheme(),
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<ThemeType>) => {
            state.currentTheme = action.payload;

            if (typeof window !== "undefined") {
                localStorage.setItem("theme", action.payload);
            }
        },
    },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;

