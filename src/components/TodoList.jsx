import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { getTodoAsync } from '../store/redux/todoSlice';

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos); //states updated, todos updated, line 14 is where component re-renders

    useEffect(() => {               // this will be called when component loads 
        dispatch(getTodoAsync());   // pass in the action that we want to dispatch (which is imported at the top), fetches to do
    }, [dispatch]);  //list of things that trigger useEffect func.

    return (
        <ul className='list-group'>
            {todos.map((todo) => (
                <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
            ))}
        </ul>
    );
};

export default TodoList;
