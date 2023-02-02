import React from "react";
import { useDispatch } from "react-redux";
import { decrement } from "../store/slices/counter-slice";

export default function Decrement() {
  const dispatch = useDispatch();

  const onDecrement = () => {
    // dispatch
    dispatch(decrement());
  };

  return (
    <>
      <h1>Decrement Component</h1>
      <button onClick={onDecrement}>onDecrement</button>
    </>
  );
}
