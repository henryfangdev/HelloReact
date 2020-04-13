import React, { useState } from "react";

/*
const fetchData = () => {
  fetch('https://api.github.com').then(resp => {
    resp.json().then(data => {
      return data;
    })
  })
}
*/
const fetchData = async () => {
  const resp = await fetch("https://api.github.com");
  const data = await resp.json();
  console.log(data);
  return data;
};

export default function Promises() {
  const [text, setText] = useState("loading...");
  fetchData().then(value => {
    setText(value.current_user_url);
  });
  return <div>{text}</div>;
}
