import Button from "../Button";
import "./StatusBar.css";
import { setStatus } from "@store/reducers/status/statusSlice";
import { setSearchText } from "../../store/reducers/todos/todosSlice";
import { useDispatch, useSelector } from "react-redux";

const StatusBar = () => {
  const status = useSelector((store) => store.status.status);
  const searchText = useSelector((store) => store.todos.searchText);

  const dispatch = useDispatch();

  const statusHandler = (e) => {
    dispatch(setStatus(e.target.value));
  };
  const searchHandler = (e) => {
    dispatch(setSearchText(e.target.value));
  };

  return (
    <div className="SBAll">
      <div className="btnStatusBar">
        <div className="but-to-all">
          <Button
            className="btn-status-all"
            value="all"
            onClick={statusHandler}
            activeBtn={status === "all" && true}
          >
            all
          </Button>
        </div>
        <div className="but-to-active">
          <Button
            className="btn-status-active"
            value="active"
            onClick={statusHandler}
            activeBtn={status === "active" && true}
          >
            active
          </Button>
        </div>
        <div className="but-to-done">
          <Button
            className="btn-status-done"
            value="done"
            onClick={statusHandler}
            activeBtn={status === "done" && true}
          >
            done
          </Button>
        </div>
      </div>
      <div className="container-todo">
        <div className="form__group_one">
          <input
            type="text"
            className="form__group_oneform__field w-100"
            placeholder="New Todo..."
            value={searchText}
            onChange={searchHandler}
          />
          <div className="fa-sharp-todo">
            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;

