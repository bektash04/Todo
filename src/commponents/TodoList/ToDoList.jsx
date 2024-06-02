import React from "react";
import ToDo from "../ToDo";
import { useSelector } from "react-redux";

const ToDoList = ({}) => {
  let filterTodos;
  const status = useSelector((store) => store.status.status);
  const todos = useSelector((store) => store.todos.todos);
  const searchText = useSelector((store) => store.todos.searchText);

  if (status === "active") {
    filterTodos = todos.filter(
      (el) => el.isActive && !el.isDeleted && el.todoText.includes(searchText),
    );
  } else if (status === "done") {
    filterTodos = todos.filter(
      (el) => !el.isActive && !el.isDeleted && el.todoText.includes(searchText),
    );
  } else if (status === "trash") {
    filterTodos = todos.filter(
      (el) => el.isDeleted && el.todoText.includes(searchText),
    );
  } else {
    filterTodos = todos.filter(
      (el) => !el.isDeleted && el.todoText.includes(searchText),
    );
  }

  return (
    <ul className="li">
      {filterTodos.map((todo) => (
        <ToDo key={todo.id} ToDoObj={todo} status={status} />
      ))}
    </ul>
  );
};

export default ToDoList;
