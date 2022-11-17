import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { postApiSlice } from "../features/api/tasksApi";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [postApiSlice.reducerPath]: postApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApiSlice.middleware),
});
console.log(store.getState());
