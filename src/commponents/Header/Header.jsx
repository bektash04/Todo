import React from "react";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = () => {
  const todos = useSelector((store) => store.todos.todos);
  const activeToDos = todos.filter((el) => el.isActive && !el.isDeleted).length;
  const doneToDos = todos.filter((el) => !el.isActive && !el.isDeleted).length;
  return (
    <div className="header">
      <h1>
        {" "}
        <i style={{ color: "yellow" }} className="fa-solid fa-star"></i>Today
      </h1>
      <div className="todo-today">
        <span className="todo-span"> {activeToDos} More </span>
        <span className="todo-span"> {doneToDos} Done </span>
      </div>
    </div>
  );
};

export default Header;
