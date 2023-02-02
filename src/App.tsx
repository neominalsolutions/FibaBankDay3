import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { Counter } from "./features/Counter";
import Increment from "./features/Increment";
import Decrement from "./features/Decrement";

function App() {
  const counter = useSelector((state: RootState) => state.counterSlice.counter);

  return (
    <div className="App">
      App Sayac : {counter}
      <Counter />
      <Increment />
      <Decrement />
    </div>
  );
}

export default App;
