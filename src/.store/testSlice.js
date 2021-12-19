import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "test",
  initialState: {
    counter: 0,
    inputVisibility: {
      visibility: "visible",
    },
    coloredStringArr: "creativeWorks".split(""),
    funnyStringArr: "creativeWorks".split(""),
  },
  reducers: {
    incrementCounter: state => {
      ++state.counter;
    },
    changeInputVisibiity: (state, action) => {
      state.inputVisibility.visibility = action.payload;
    },
    updateColoredString: (state, action) => {
      state.coloredStringArr = action.payload;
    },
    changeFunnyStrArr: (state, action) => {
      state.coloredStringArr = state.funnyStringArr = action.payload.split("");
    },
  },
});

export const {
  updateColoredString,
  changeFunnyStrArr,
  incrementCounter,
  changeInputVisibiity,
} = testSlice.actions;
export default testSlice.reducer;
