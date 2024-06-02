import React from "react";
import { setTodos } from "@store/reducers/todos/todosSlice";
import "./AddForm.css";
import { useDispatch, useSelector } from "react-redux";
import { setTodoText } from "../../store/reducers/todos/todosSlice";

const AddForm = () => {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todos.todos);
  const todoText = useSelector((store) => store.todos.todoText);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      setTodos([
        ...todos,
        {
          id: todos.length !== 0 && todos.at(-1).id ? todos.at(-1).id + 1 : 1,
          todoText: todoText,
          isActive: true,
          isDeleted: false,
        },
      ]),
    );
    dispatch(setTodoText(""));
  };

  const todoTextInputChange = (e) => {
    dispatch(setTodoText(e.target.value));
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        className="input-todo"
        type="text"
        onChange={todoTextInputChange}
        value={todoText}
        placeholder="New Todo...."
      />
      <div className="fa-solid-todo">
        <i className="fa-solid fa-plus"></i>
      </div>
    </form>
  );
};

export default AddForm;
