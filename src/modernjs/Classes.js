import React from "react";

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, level) {
    super(name);
    this.level = level;
  }

  greet() {
    return `Hello ${this.name} from ${this.level}`;
  }
}

export default function Classes() {
  const p1 = new Person("Max");
  const p2 = new Student("Tina", "1st Grade");
  const p3 = new Student("Marry", "2nd Grade");
  p3.greet = () => "I am special!";
  return (
    <div>
      <h3>{p1.greet()}</h3>
      <h3>{p2.greet()}</h3>
      <h3>{p3.greet()}</h3>
    </div>
  );
}
