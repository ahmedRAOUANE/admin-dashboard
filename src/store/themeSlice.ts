import { ThemeType } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StateType {
    currentTheme: ThemeType
}

const initialState: StateType = {
    currentTheme: localStorage.getItem("theme") as ThemeType || "light",
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<ThemeType>) => {
            state.currentTheme = action.payload;
            localStorage.setItem("theme", action.payload);
        },
    },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;

