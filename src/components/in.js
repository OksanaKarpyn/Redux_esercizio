import React from "react";
import { useDispatch } from "react-redux";
import {
  add,
  minus,
  multiple,
  division,
  textInput,
  showConsole,
} from "../app/taskReducerSlice.js";

function In() {
  let task1Input = React.createRef();
  let taskInputText = React.createRef();
  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch(add(task1Input.current.value));
  };
  const minusHandler = () => {
    dispatch(minus(task1Input.current.value));
  };
  const multipleHandler = () => {
    dispatch(multiple(task1Input.current.value));
  };
  const divisionHandler = () => {
    dispatch(division(task1Input.current.value));
  };
  const textHandler = () => {
    dispatch(textInput(taskInputText.current.value));
  };
  const consoleHandler = () => {
    dispatch(showConsole());
  };
  return (
    <>
      <div>
        <input type="number" className="form-control w-25" ref={task1Input} />
        <h2>Task In</h2>
        <div className="d-flex  justify-content-around w-50">
          <button className="btn btn-outline-primary" onClick={addHandler}>
            <span className="px-5">+</span>
          </button>
          <button className="btn btn-outline-primary " onClick={minusHandler}>
            <span className="px-5">-</span>
          </button>
          <button
            className="btn btn-outline-primary "
            onClick={multipleHandler}
          >
            <span className="px-5">*</span>
          </button>
          <button
            className="btn btn-outline-primary "
            onClick={divisionHandler}
          >
            <span className="px-5">/</span>
          </button>
        </div>
        <div>
          <input
            type="text"
            className="form-control my-4 w-25"
            ref={taskInputText}
          />
          <button className="btn btn-outline-primary " onClick={textHandler}>
            text
          </button>
        </div>
        <button className="btn btn-outline-primary " onClick={consoleHandler}>
          show console
        </button>
      </div>
    </>
  );
}
export default In;
