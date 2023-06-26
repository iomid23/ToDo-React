import React from "react";
import { useState } from "react";

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
      <ul className="text-md p-2 font-sans">
        {toDos.map((toDo) => (
          <div className="flex w-1/4 justify-between">
            {ToDo.isCompleted ? (
              <li>
                <s></s>
                {toDo.name}
                <s></s>
              </li>
            ) : (
              <li>{toDo.name}</li>
            )}
            <div>
              <span className="cursor-pointer px-2 text-purple-500">
                <i class="fa-solid fa-pen-to-square"></i>
              </span>
              <span className="cursor-pointer px-2 text-green-500">
                <i class="fa-solid fa-square-check"></i>
              </span>
              <span className="cursor-pointer px-2 text-red-500">
                <i class="fa-solid fa-trash"></i>
              </span>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
};

export default ToDoForm;
