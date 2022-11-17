import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasks: [],
  totalIncomplete: 0,
  totalCompleted: 0,
  totalTasks: 109,
};
export const counterSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      state.totalIncomplete = 21;
    },
  },
});
export const { addTask, removeTask } = counterSlice.actions;
export default counterSlice.reducer;
