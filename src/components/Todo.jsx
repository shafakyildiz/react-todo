import React from 'react'
import { GrFormClose, GrFormEdit, GrFormCheckmark } from 'react-icons'
import { useTodoLayerValue } from '../context/TodoContext'


const Todo = ({todo}) => {
    return (
        <div className='todo-row'>
            <div>
                {todo.content}
            </div>
            <div className='todo-icons'>
                {/* <GrFormClose className="todo-icon" onClick={} />
                <GrFormEdit className="todo-icon" onClick={} />
                <GrFormCheckmark className="todo-icon" onClick={} /> */}

            </div>
        </div>
    )
}

export default Todo
