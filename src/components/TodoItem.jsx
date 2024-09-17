import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../store/redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
    const dispatch = useDispatch();

    const handleCompleteClick = () => {
        dispatch(toggleComplete({ id, completed: !completed }));
    };

    const handleDeleteClick = () => {
        dispatch(deleteTodo({ id }));
    };

    return (
        <li className={`list-group-item ${completed ? 'bg-green-100' : 'bg-white'} p-4 mb-2 rounded-lg shadow-sm`}>
            <div className='flex justify-between items-center'>
                <span className='flex items-center'>
                    <input 
                        type='checkbox' 
                        className='mr-7' 
                        checked={completed}
                        onChange={handleCompleteClick}
                    />
                    <span className={`text-lg ${completed ? 'flex line-through text-gray-500' : 'text-gray-800'} mr-7`}>
                        {title}
                    </span>
                </span>
                <button onClick={handleDeleteClick} className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded flex'>
                    Delete
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
