import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type Props = {};

export const Counter = ({}: Props) => {
  const counter = useSelector((state: RootState) => state.counterSlice.counter);

  return (
    <>
      <div>Sayaç: {counter} </div>
    </>
  );
};
