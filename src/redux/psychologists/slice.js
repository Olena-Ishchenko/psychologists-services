import { createSlice } from "@reduxjs/toolkit";
import { fetchPsychologists } from "./operations";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const psychologistsSlice = createSlice({
  name: "psychologists",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPsychologists.pending, handlePending)
      .addCase(fetchPsychologists.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchPsychologists.rejected, handleRejected);
  },
});

export const psychologistsReducer = psychologistsSlice.reducer;
