import React from 'react'
import "../style/TaskFiltring.css"

function TaskFiltring({ setFilter }) {
    return (
        <>
            <div className='filter-button'>
                <button onClick={() => setFilter('all')} className='btn'>All</button>
                <button onClick={() => setFilter('pending')} className='btn'>Pending</button>
                <button onClick={() => setFilter('completed')} className='btn'>Completed</button>
            </div>
        </>
    )
}

export default TaskFiltring