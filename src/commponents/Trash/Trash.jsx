import React from "react";
import Button from "../Button";
import "./Trash.css";
import { setStatus } from "@store/reducers/status/statusSlice";
import { useDispatch, useSelector } from "react-redux";
const Trash = () => {
  const dispach = useDispatch();
  const status = useSelector((store) => store.status.status);
  const statusHandler = (e) => {
    dispach(setStatus(e.target.value));
  };

  return (
    <div className="trash-div-todo">
      <div className="trash-todo-w-10">
        <Button
          className="trash-todo"
          value="trash"
          onClick={statusHandler}
          activeBtn={status === "trash" && true}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default Trash;
