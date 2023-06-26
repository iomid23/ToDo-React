import React from "react";
import { useState } from "react";
import ToDoForm from "./ToDoForm";
import { useState } from "react";

const ToDoListing = ({ toDos }) => {
  const editHandler = (event) => {
    setToDos(
      toDos.map((toDo) => {
        if (toDo.id === event.id) {
          return event;
        } else {
          return toDos;
        }
      })
    );
  };

  const deleteHandler = () => {};

  return (
    <ul className="text-md p-2 font-sans">
      {toDos.map((toDo, index) => (
        <div className="flex w-1/4 justify-between">
          <li key={toDo.id}>{toDo.name}</li>
          <div>
            <span
              className="cursor-pointer px-2 text-purple-500"
              onChange={editHandler}
            >
              <i class="fa-solid fa-pen-to-square"></i>
            </span>
            <span className="cursor-pointer px-2 text-green-500">
              <i class="fa-solid fa-square-check"></i>
            </span>
            <span
              className="cursor-pointer px-2 text-red-500"
              onDelete={deleteHandler}
            >
              <i class="fa-solid fa-trash"></i>
            </span>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default ToDoListing;
