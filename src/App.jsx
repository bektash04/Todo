import React from "react";
import { useEffect } from "react";
import AddForm from "./commponents/AddForm";
import Header from "./commponents/Header";
import StatusBar from "./commponents/StatusBar";
import ToDoList from "./commponents/TodoList";
import Trash from "./commponents/Trash";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Icons from "./commponents/Icons";
import "./App.css";
import "./Mobile.css";
import { useSelector, useDispatch } from "react-redux";
import { setTodos } from "@store/reducers/todos/todosSlice";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((s) => s.todos.todos);

  useEffect(() => {
    dispatch(setTodos(JSON.parse(localStorage.getItem("todos"))));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const IconsData = [
    { id: 1, className: "fas fa-gem" },
    { id: 2, className: "fas fa-plane" },
    { id: 3, className: "fas fa-crown" },
    { id: 4, className: "fas fa-book" },
    { id: 5, className: "fas fa-star" },
    { id: 6, className: "fas fa-tasks" },
    { id: 7, className: "fas fa-pen" },
  ];

  const duplicateIcons = (icons, times) => {
    return Array.from({ length: times }, (_, index) =>
      icons.map((icon) => ({ ...icon, id: icon.id + index * icons.length })),
    ).flat();
  };

  const iconData = duplicateIcons(IconsData, 10);

  return (
    <div className="app">
      <div className="icons-background">
        {iconData.map((icon) => (
          <Icons key={icon.id} iconClass={icon.className} />
        ))}
      </div>
      <div className="app-containet">
        <Header />
        <StatusBar />
        <ToDoList />
        <AddForm />
        <Trash />
      </div>
    </div>
  );
}

export default App;

