import React, { useState } from 'react'
import "../style/TaskCreation.css"


function TaskCreation({ addTask }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (title) {
            addTask({ id: Date.now(), title, description, completed: false })
            setTitle("");
            setDescription("");
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit} className='form-container'>
                <input
                    type='text'
                    placeholder='Task Title'
                    className='input-field'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    placeholder='Task Discription'
                    className='input-field'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <button className='btn'>Add Task</button>
            </form>
        </>
    )
}

export default TaskCreation