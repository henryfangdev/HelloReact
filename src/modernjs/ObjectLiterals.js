import React from "react";

export default function ObjectLiterals() {
  const something = "answer";
  const obj = {
    p1: 100,
    p2: 20,
    f1() {},
    f2: () => {},
    [something]: 42
  };

  return <div>{obj.answer}</div>;
}
