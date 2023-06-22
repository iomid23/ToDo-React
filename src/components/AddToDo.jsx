import {useState, useEffect} from 'react';

export default function AddToDo() {

    const [toDo, setToDo] = useState([]);
    const [toDoInput, setToDoInput] = useState("");
    const [editToDo, setEditToDo] = useState(false);

    useEffect (() => {
        const storeToDo = JSON.parse(localStorage.getItem("toDo"));
        if (storeToDo) {
            setToDo(storeToDo)
        }
    }, []
    )

    useEffect(() => {
        localStorage.setItem("toDo", JSON.stringify(toDo)), [toDo]
    })

    const addToDo = (event) => {
        event.preventDefault();
        
    }
}