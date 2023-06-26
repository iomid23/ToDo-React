import React from "react";
import { useState } from "react";
import ToDoListing from "./ToDoListing";

const ToDoForm = () => {
  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState("");

  const addToDos = (event) => {
    event.preventDefault();
    setToDos([...toDos, { id: crypto.randomUUID(), name: input }]);
    setInput("");
  };

  return (
    <>
      <form className="flex mt-4" onSubmit={addToDos}>
        <input
          type="text"
          placeholder="Enter your task here"
          className="shadow appearance-none border-teal rounded w-72 py-2 px-3 mr-4 text-grey-darker"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="flex-no-shrink p-2 border-2 rounded text-teal border-teal bg-gray-500 hover:text-white hover:bg-purple-500"
        >
          <i className="fa-solid fa-plus p-2"></i>
        </button>
      </form>
      <ToDoListing toDos={toDos} />
    </>
  );
};

export default ToDoForm;
