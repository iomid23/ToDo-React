import { useState } from "react";
import ToDoListing from "./ToDoListing";

const ToDoForm = (props) => {
  const [toDo, setToDo] = useState("");

  const addToDo = (event) => {
    event.preventDefault();
  };

  const changeHandler = (event) => {
    console.log(event.target.value);
    setToDo(event.target.value);
  };

  return (
    <>
      <form className="flex mt-4" onSubmit={addToDo}>
        <input
          type="text"
          placeholder="Enter your task here"
          className="shadow appearance-none border-teal rounded w-72 py-2 px-3 mr-4 text-grey-darker"
          onChange={changeHandler}
        />
        <button
          type="submit"
          className="flex-no-shrink p-2 border-2 rounded text-teal border-teal bg-gray-500 hover:text-white hover:bg-purple-500"
        >
          <i className="fa-solid fa-plus p-2"></i>
        </button>
      </form>
      <ul>
        <ToDoListing value={toDo} />
      </ul>
    </>
  );
};

export default ToDoForm;
