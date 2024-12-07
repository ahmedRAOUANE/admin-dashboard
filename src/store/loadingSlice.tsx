import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoadingState {
    isLoading: boolean;
}

const initialState: LoadingState = {
    isLoading: false
};

const lodingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
});

export const { setIsLoading } = lodingSlice.actions;
export default lodingSlice.reducer;