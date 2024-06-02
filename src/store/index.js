import { configureStore } from "@reduxjs/toolkit";
import statusSlice from "./reducers/status/statusSlice";
import todosSlice from "./reducers/todos/todosSlice";

export const store = configureStore({
  reducer: {
    status: statusSlice,
    todos: todosSlice,
  },
});
