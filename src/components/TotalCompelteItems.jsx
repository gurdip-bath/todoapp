import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

const TotalCompleteItems = () => {
    const todos = useSelector((state) => state.todos);

    // Memoize the filtered array to avoid creating a new reference on each render
    const completedTodos = useMemo(() => {
        return todos.filter((todo) => todo.completed === true);
    }, [todos]);

    return (
        <h4 className='mt-4'>
            Total Complete Items: {completedTodos.length}
        </h4>
    );
};

export default TotalCompleteItems;
