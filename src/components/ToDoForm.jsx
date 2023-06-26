import React, { useState } from "react";

const ToDoForm = () => {
  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState("");

  const addToDo = (event) => {
    event.preventDefault();
    setToDos([
      ...toDos,
      { id: crypto.randomUUID(), name: input, isCompleted: false },
    ]);
    setInput("");
  };

  const handleEdit = (id, event) => {
    const updatedToDos = toDos.map((toDo) => {
      if (toDo.id === id) {
        return { ...toDo, name: event.target.value };
      }
      return toDo;
    });
    setToDos(updatedToDos);
  };

  const handleComplete = (id) => {
    const updatedToDos = toDos.map((toDo) => {
      if (toDo.id === id) {
        return { ...toDo, isCompleted: !toDo.isCompleted };
      }
      return toDo;
    });

    setToDos(updatedToDos);
  };

  const handleDelete = (id) => {
    const filteredToDos = toDos.filter((toDo) => toDo.id !== id);
    setToDos(filteredToDos);
  };

  return (
    <>
      <form className="mt-4 flex justify-center pt-4" onSubmit={addToDo}>
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
      <ul className="text-md m-4 flex flex-col items-center justify-center p-2 font-sans">
        {toDos.map((toDo) => (
          <div
            key={toDo.id}
            className="m-1 flex w-96 justify-between rounded-md bg-purple-50 p-4"
          >
            <input
              type="text"
              value={toDo.name}
              onChange={(e) => editHandler(e, toDo.id)}
            />
            <div>
              <span
                className="cursor-pointer px-2 text-purple-500"
                onClick={() => handleEdit(toDo.id)}
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </span>
              <span
                className="cursor-pointer px-2 text-green-500"
                onClick={() => handleComplete(toDo.id)}
              >
                <i className="fa-solid fa-square-check"></i>
              </span>
              <span
                className="cursor-pointer px-2 text-red-500"
                onClick={() => handleDelete(toDo.id)}
              >
                <i className="fa-solid fa-trash"></i>
              </span>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
};

export default ToDoForm;
