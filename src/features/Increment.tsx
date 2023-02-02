import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByValue } from "../store/slices/counter-slice";
import { AppDispatch, RootState } from "../store/store";

type Props = {};

function Increment({}: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const counter = useSelector((state: RootState) => state.counterSlice.counter);

  const Inc = () => {
    dispatch(increment());
  };

  return (
    <>
      <h1>Inc Component</h1>
      <div>
        <p>Inc Sayac : {counter}</p>

        <input
          placeholder="increment value"
          onChange={(event) =>
            dispatch(incrementByValue(Number(event.target.value)))
          }
        />

        <button onClick={Inc}>OnIncrement</button>
      </div>
    </>
  );
}

export default Increment;
