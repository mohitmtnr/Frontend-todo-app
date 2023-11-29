import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducer";
const store = configureStore({
  reducer: { todoList: todosReducer },
});

export default store;
