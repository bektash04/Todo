import React from "react";
import { useState } from "react";
import Button from "../Button";
import { setTodos } from "@store/reducers/todos/todosSlice";
import { useDispatch, useSelector } from "react-redux";
import "./ToDo.css";

const Todo = ({ ToDoObj, status }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(ToDoObj.todoText);
  const todos = useSelector((s) => s.todos.todos);

  const dispatch = useDispatch();

  const doneHandler = () => {
    dispatch(
      setTodos(
        todos.map((el) =>
          el.id === ToDoObj.id ? { ...el, isActive: !el.isActive } : el,
        ),
      ),
    );
  };

  const deletedorRestoreHandler = () => {
    dispatch(
      setTodos(
        todos.map((el) =>
          el.id === ToDoObj.id ? { ...el, isDeleted: !el.isDeleted } : el,
        ),
      ),
    );
  };

  const deletedHandler = () => {
    dispatch(setTodos(todos.filter((el) => el.id !== ToDoObj.id)));
  };

  const editHandler = () => {
    setIsEditing(true);
  };

  const saveHandler = () => {
    dispatch(
      setTodos(
        todos.map((el) =>
          el.id === ToDoObj.id ? { ...el, todoText: editedText } : el,
        ),
      ),
    );
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <li>
      <div className="lu-li-todo">
        <div>
          {isEditing ? (
            <div className="save-todo">
              <input
                type="text"
                className={`todo-text done ${ToDoObj.isActive ? "" : "done"}`}
                value={editedText}
                onChange={handleChange}
                style={{ border: "none", background: "none" }}
              />
            </div>
          ) : (
            <input
              type="text"
              className={`todo-text active ${ToDoObj.isActive ? "" : "done"}`}
              value={ToDoObj.todoText}
              readOnly={true}
              style={{ border: "none", background: "none" }}
            />
          )}
        </div>
        {status !== "trash" ? (
          <div>
            {isEditing ? (
              <div>
                <Button value="save" onClick={saveHandler}>
                  <i className="fa-solid fa-square-check"></i>
                </Button>
              </div>
            ) : (
              <div className="btn-todo">
                <Button value="done" onClick={doneHandler}>
                  <i className="fa-solid fa-check"></i>
                </Button>
                <Button value="edit" onClick={editHandler}>
                  <i className="fa-sharp fa-solid fa-pen-to-square"></i>
                </Button>
                <Button value="delete" onClick={deletedorRestoreHandler}>
                  <i className="fa-sharp fa-solid fa-trash"></i>
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="list-btn-todo-res-do">
            <div className="list-btn-todo">
              <Button onClick={deletedorRestoreHandler}>
                <i className="fa-solid fa-trash-arrow-up"></i>
              </Button>
              <Button onClick={deletedHandler}>
                <i className="fa-sharp fa-solid fa-trash"></i>
              </Button>
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

export default Todo;
