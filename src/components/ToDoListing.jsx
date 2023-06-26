import React from "react";
import { useState } from "react";
import ToDoForm from "./ToDoForm";

const ToDoListing = ({ toDos }) => {
  const editHandler = (event) => {
    setToDos(
      toDos.map((toDo) => {
        if (ToDoForm.id === event.id) {
          return event;
        } else {
          return ToDos;
        }
      })
    );
  };

  return (
    <ul>
      {toDos.map((toDos, index) => (
        <div className="flex justify-between w-1/4">
          <li key={toDo.id}>{toDo.name}</li>
          <div>
            <span className="px-2 text-purple-500" onChange={editHandler}>
              <i class="fa-solid fa-pen-to-square"></i>
            </span>
            <span className="px-2 text-green-500">
              <i class="fa-solid fa-square-check"></i>
            </span>
            <span className="px-2 text-red-500" onDelete={deleteHandler}>
              <i class="fa-solid fa-trash"></i>
            </span>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default ToDoListing;
