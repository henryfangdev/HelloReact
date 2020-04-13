import React from "react";

export default function TemplateString() {
  const greeting = "Hello World";
  const answer = "Forty Two";
  // Using backtick to define template string
  const html = `
  <div>
    ${Math.random()}
  </div>`;
  return <div>{html}</div>;
}
