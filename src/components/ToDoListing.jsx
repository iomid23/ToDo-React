import React from "react";
import { useState } from "react";
import ToDoForm from "./ToDoForm";

const ToDoListing = ({ toDo, key, isCompleted }) => {
  // const editHandler = (event) => {
  //   setToDos(
  //
  //       if (key === event.id) {
  //         return event;
  //       } else {
  //         return toDos;
  //       }
  //     })
  //   );
  // };

  // const completeHandler = (event) => {
  //   event.preventDefault();
  //   const completedToDos = toDos.map((toDo, index) => {
  //     const toDoId = event.target.id;
  //     if (toDoId === toDo.id) {
  //       return !toDo.isCompleted;
  //     } else {
  //       return toDo.isCompleted;
  //     }
  //   });
  //   setToDos(completedToDos);
  // };

  // const deleteHandler = () => {};

  return (
    <ul className="text-md p-2 font-sans">
      <div className="flex w-1/4 justify-between">
        {/* <li>{isCompleted ? <s>{toDo}</s> : { toDo }}</li> */}
        <li>{toDo}</li>
        <div>
          <span
            className="cursor-pointer px-2 text-purple-500"
            // onChange={editHandler}
          >
            <i class="fa-solid fa-pen-to-square"></i>
          </span>
          <span
            className="cursor-pointer px-2 text-green-500"
            // onClick={completeHandler}
          >
            <i class="fa-solid fa-square-check"></i>
          </span>
          <span
            className="cursor-pointer px-2 text-red-500"
            // onDelete={deleteHandler}
          >
            <i class="fa-solid fa-trash"></i>
          </span>
        </div>
      </div>
    </ul>
  );
};

export default ToDoListing;
