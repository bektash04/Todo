import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  todoText: "",
  searchText: "",
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    setTodoText: (state, action) => {
      state.todoText = action.payload;
    },

    setSearchText: (state, actiom) => {
      state.searchText = actiom.payload;
    },
  },
});

export const { setTodos, setSearchText, setTodoText } = todosSlice.actions;

export default todosSlice.reducer;
