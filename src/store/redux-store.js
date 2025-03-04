import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "../slice/pizzaSlice";
import bookReducer from "../features/books/bookSlice";

export default configureStore({
  reducer: {
    pizzaInfo: pizzaReducer,
    bookInfo: bookReducer,
  },
});
