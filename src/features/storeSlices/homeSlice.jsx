import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    homeIsLoading: true,
}

const homeSlice = createSlice({
    name: 'homeLoader',
    initialState,
    reducers: {
        changeLoadingState: (state, action) => {
            state.homeIsLoading = action.payload
        }
    }
})

export default homeSlice.reducer;

export const { changeLoadingState } = homeSlice.actions;