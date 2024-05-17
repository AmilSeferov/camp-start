import { configureStore } from "@reduxjs/toolkit";
import moviesreducer from "../redux/moviesreducer";
export const store = configureStore({
  reducer: {
    movieList: moviesreducer,
  },
});
