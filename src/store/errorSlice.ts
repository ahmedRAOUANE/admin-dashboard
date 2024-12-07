import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ErrorState {
    message: string;
    action: "ok" | "cancel" | "redirect" | "retry";
    redirectTo?: string
}

const initialState = {
    error: {
        message: "",
        action: "ok",
    } as ErrorState | null
}

const errorSlice = createSlice({
    name: "error",
    initialState,
    reducers: {
        setError(state, action: PayloadAction<ErrorState>) {
            state.error = action.payload;
        },
        clearError(state) {
            state.error = null;
        }
    }
})

export const { setError, clearError } = errorSlice.actions;
export default errorSlice.reducer;