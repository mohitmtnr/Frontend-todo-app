import { ADD_TASK, REMOVE_TASK, EDIT_TASK, MARK_COMPLETED } from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const todosReducer = createReducer([], (builder) => {
  builder
    .addCase(ADD_TASK, (state, action) => {
      state.push(action.payload);
    })
    .addCase(REMOVE_TASK, (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    })
    .addCase(EDIT_TASK, (state, action) => {
      const { title, description, due } = action.payload.newTask;
      const copy = state.map((task) =>
        task.id === action.payload.id
          ? {
              ...task,
              title,
              description,
              due,
            }
          : task
      );
      return copy;
    })
    .addCase(MARK_COMPLETED, (state, action) => {
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      );
    });
});

export default todosReducer;
