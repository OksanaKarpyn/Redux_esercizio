import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectValue, selectText, textConsole } from "../app/taskReducerSlice";

function Out() {
  const task1 = useSelector(selectValue);
  const taskText = useSelector(selectText);
  const consoleContent = useSelector(textConsole);
  // const dispatch = useDispatch();
  return (
    <>
      <hr />
      <h2>Task Out</h2>
      <p className="border-bottom w-25 my-3">{task1}</p>
      <p className="border-bottom w-50 my-3">{taskText}</p>
      <p className="border-bottom w-50 my-3">{consoleContent}</p>
    </>
  );
}
export default Out;
