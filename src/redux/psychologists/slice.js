import { createSlice, createAction } from "@reduxjs/toolkit";
import { fetchPsychologists } from "./operations";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

export const setItemById = createAction("psychologists/setItemById");

const psychologistsSlice = createSlice({
  name: "psychologists",
  initialState: {
    items: [],
    loading: false,
    error: null,
    itemById: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(setItemById, (state, action) => {
        state.itemById = action.payload;
      })
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
