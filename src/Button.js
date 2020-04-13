import React, { useState } from "react";
import "./styles.css";

export default function Button() {
  const [counter, setCounter] = useState(0);
  return <button onClick={() => setCounter(counter + 1)}>{counter}</button>;
}
