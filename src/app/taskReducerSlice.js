import { createSlice } from "@reduxjs/toolkit";
export const taskReducerSlice = createSlice({
  name: "store",
  initialState: {
    value: 0,
    text: "hello",
    console: "console empty",
  },
  reducers: {
    add: (state, data) => {
      state.value += data.payload;
    },
    minus: (state, data) => {
      state.value -= +data.payload;
    },
    multiple: (state, data) => {
      state.value *= +data.payload;
    },
    division: (state, data) => {
      state.value /= +data.payload;
    },
    showConsole: (state) => {
      state.console = "hello it is my text console";
    },
    textInput: (state, data) => {
      state.text = data.payload;
    },
  },
});
export const { add, minus, showConsole, multiple, division, textInput } =
  taskReducerSlice.actions;
export const selectValue = (state) => state.taskReducer.value;
export const selectText = (state) => state.taskReducer.text;
export const textConsole = (state) => state.taskReducer.console;
export default taskReducerSlice.reducer;
