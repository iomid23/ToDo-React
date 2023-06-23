import {useState} from "react";

function ToDoForm() {

    const [toDo, setToDo] = useState({});

    const addToDo = (event) => {
        event.preventDefault();
        console.log(event = () => {event.target.value});
        // setToDo = (event) => {
            // return { ...preview, value: event.target.value};
        }
    }

    return (
        <>
        <form class="flex mt-4" onSubmit={addToDo}>
            <input type="text" placeholder="Enter your task here" class="shadow appearance-none border-teal rounded w-72 py-2 px-3 mr-4 text-grey-darker"/>
            <button type="submit" class="flex-no-shrink p-2 border-2 rounded text-teal border-teal bg-gray-500 hover:text-white hover:bg-purple-500"><i class="fa-solid fa-plus p-2"></i></button>
        </form>
        <ul>
            
        </ul>
        </>
    )
}

export default ToDoForm;