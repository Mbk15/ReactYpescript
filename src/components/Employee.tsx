import React, { useState } from "react";
interface Istate {
  name: string;
  age: number;
  title: string;
}
const Employee: React.FC<Istate> = () => {
  let [state, setState] = useState<Istate>({
    name: "Mubby",
    age: 23,
    title: "cruiser",
  });

  return (
    <>
      <h3>Employee Component</h3>
      <ul className="list-group">
        <ul className="list-group-item">Name : {state.name}</ul>
        <ul className="list-group-item">Age : {state.age}</ul>
        <ul className="list-group-item">Tittle: {state.title}</ul>
      </ul>
    </>
  );
};

export default Employee;
