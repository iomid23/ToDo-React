import React from "react";
import { useState } from "react";
import ToDoListing from "./ToDoListing";

const ToDoForm = () => {
  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState("");

  const addToDos = (event) => {
    event.preventDefault();
    setToDos([
      ...toDos,
      { id: crypto.randomUUID(), name: input, isCompleted: false },
    ]);
    setInput("");
  };

  return (
    <>
      <form className="mt-4 flex justify-center pt-4" onSubmit={addToDos}>
        <input
          type="text"
          placeholder="Enter your task here"
          className="border-teal text-grey-darker mr-4 w-72 appearance-none rounded px-3 py-2 shadow"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="flex-no-shrink text-teal border-teal rounded border-2 bg-gray-500 p-2 hover:bg-purple-500 hover:text-white"
        >
          <i className="fa-solid fa-plus p-2"></i>
        </button>
      </form>
      {toDos.map((toDo) => (
        <ToDoListing
          toDo={toDo.name}
          key={toDo.id}
          isCompleted={toDo.isCompleted}
        />
      ))}
    </>
  );
};

export default ToDoForm;
