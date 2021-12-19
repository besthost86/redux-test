import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateColoredString,
  incrementCounter,
  changeFunnyStrArr,
  changeInputVisibiity,
} from "../../.store/testSlice";
import { highlightLetter } from "./utilities";

export default function Test() {
  const counter = useSelector(state => state.test.counter);
  const dispatch = useDispatch();

  const funnyStringArr = useSelector(state => state.test.funnyStringArr);
  const coloredStringArr = useSelector(state => state.test.coloredStringArr);
  const inputVisibility = useSelector(state => state.test.inputVisibility);

  const doYourMagic = () => {
    dispatch(incrementCounter());
    highlightLetter(funnyStringArr, arr => {
      dispatch(updateColoredString(arr));
    });
    dispatch(changeInputVisibiity("hidden"));
  };

  return (
    <div>
      <h1>{coloredStringArr.map(l => l)}</h1>
      <div className="container">
        <div className="input-group mb-3">
          <input
            style={inputVisibility}
            type="text"
            onChange={e => dispatch(changeFunnyStrArr(e.target.value))}
            className="form-control"
            placeholder="Type in some random text or not :)"
            aria-label="Type in some random text"
            aria-describedby="button-addon2"
          />
        </div>
      </div>
      <button className="btn btn-info btn-md centered">{counter}</button>
      <button className="btn btn-primary btn-lg centered" onClick={doYourMagic}>
        Tap
      </button>
    </div>
  );
}
