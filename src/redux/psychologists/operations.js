import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPsychologists } from "../../firebase/db";

export const fetchPsychologists = createAsyncThunk(
  "psychologists/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await getPsychologists();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
