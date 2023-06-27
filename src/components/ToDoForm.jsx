import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const ToDoForm = () => {
  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const storedToDos = localStorage.getItem("toDos");
    if (storedToDos) {
      setToDos(JSON.parse(storedToDos));
    }
  }, []);

  const updateLocalStorage = (updatedToDos) => {
    localStorage.setItem("toDos", JSON.stringify(updatedToDos));
  };

  const addToDo = (event) => {
    event.preventDefault();
    const newToDo = { id: uuidv4(), name: input, isCompleted: false };
    const updatedToDos = [...toDos, newToDo];
    setToDos(updatedToDos);
    updateLocalStorage(updatedToDos);
    setInput("");
  };

  const handleEdit = (id, e) => {
    const updatedToDos = toDos.map((toDo) => {
      if (toDo.id === id) {
        return { ...toDo, name: e.target.value };
      }
      return toDo;
    });
    setToDos(updatedToDos);
    updateLocalStorage(updatedToDos);
  };

  const handleComplete = (id) => {
    const updatedToDos = toDos.map((toDo) => {
      if (toDo.id === id) {
        return { ...toDo, isCompleted: !toDo.isCompleted };
      }
      return toDo;
    });
    setToDos(updatedToDos);
    updateLocalStorage(updatedToDos);
  };

  const handleDelete = (id) => {
    const filteredToDos = toDos.filter((toDo) => toDo.id !== id);
    setToDos(filteredToDos);
    updateLocalStorage(filteredToDos);
  };

  return (
    <>
      <div className="p-4">
        <h1 className="mt-4 flex justify-center pt-4 text-white text-2xl font-mono">
          Get your Tasks done
        </h1>
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
            className="flex-no-shrink text-teal border-teal rounded border-2 bg-gray-100 p-2 hover:bg-purple-500 hover:text-white"
          >
            <i className="fa-solid fa-plus p-2"></i>
          </button>
        </form>
        <ul className="text-md m-4 flex flex-col items-center justify-center p-2 font-sans">
          {toDos.map((toDo) => (
            <div
              key={toDo.id}
              className={
                toDo.isCompleted
                  ? "m-1 flex items-center justify-between rounded-sm bg-emerald-200 p-4 shadow-lg"
                  : "m-1 flex items-center justify-between rounded-sm bg-purple-50 p-4 shadow-lg"
              }
            >
              <input
                className="bg-purple-50"
                type="text"
                value={toDo.name}
                onChange={(e) => handleEdit(toDo.id, e)}
              />
              <div>
                <span
                  className="cursor-pointer px-2 text-purple-500"
                  onClick={() => handleEdit(toDo.id)}
                ></span>
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
      </div>
    </>
  );
};

export default ToDoForm;
