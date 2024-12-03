"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
    isOpen: boolean;
    type: string;
}

const initialState: ModalState = {
    isOpen: false,
    type: "",
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setIsOpen: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload;
        },
        setType: (state, action: PayloadAction<string>) => {
            state.type = action.payload;
        },
    },
});

export const { setIsOpen, setType } = modalSlice.actions;
export default modalSlice.reducer;

