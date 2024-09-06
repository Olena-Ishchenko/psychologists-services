import { configureStore } from "@reduxjs/toolkit";
import { psychologistsReducer } from "./psychologists/slice.js";

const store = configureStore({
  reducer: {
    psychologists: psychologistsReducer,
  },
});

export default store;
