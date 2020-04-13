import React from "react";

export default function Destructing() {
  //const PI = Math.PI;
  //const E = Math.E;
  //const SQRT2 = Math.SQRT2;
  const { PI, E, SQRT2 } = Math;
  //const {Component, Fragment, useState} = require('react');
  //useState(10);

  const circle = {
    radius: 2,
    label: `circleX`,
    color: `red`
  };

  // deconstructing object with ...
  const { radius, ...info } = circle;
  console.log(radius);
  console.log(info);
  const newObject = {
    ...info
  };
  info.label = `old circle`;
  console.log(newObject);
  newObject.label = "new circle";

  const circleArea = ({ radius }, { precision = 2 } = {}) => {
    return (PI * radius * radius).toFixed(precision);
  };

  const [first, second, , forth, ...restOfItems] = [1, 2, 3, 4, 5, 6];
  return <div>{circleArea(circle, { precision: restOfItems[1] })}</div>;
}
