import React from 'react';
import "../style/TaskManagement.css"

function TaskManagement({ tasks, toggleComplete, deleteTask }) {
    return (
        <>
            <ul className='task-list'>
                {tasks.map((task) => (
                    <li key={task.id} className='task-item'> 
                        <div>
                            <h3 className='heading'>{task.title}</h3>
                        </div>

                        <div>
                            <button
                                onClick={() => toggleComplete(task.id)}
                                className='btn-complete'
                            >
                                {task.completed ? "Undo" : "Complete"} 
                            </button>
                            <button
                                onClick={() => deleteTask(task.id)} 
                                className='btn-delete'
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TaskManagement;