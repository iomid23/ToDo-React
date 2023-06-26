import React from "react";
import ToDoForm from "./ToDoForm";

const ToDoListing = ({ toDos }) => {
  return (
    <ul>
      {toDos.map((toDo) => (
        <li key={toDo.id}>{toDo.name}</li>
      ))}
    </ul>
  );
};

export default ToDoListing;
