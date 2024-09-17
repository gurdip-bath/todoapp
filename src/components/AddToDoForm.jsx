import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/redux/todoSlice';


const AddTodoForm = () => {
	const [value, setValue] = useState('');

    const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(addTodo({
            title: value,
        })
    );
	};

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3 flex space-x-4'>
		  <label className='sr-only'>Name</label>
		  <input
			type='text'
			className='form-control mb-2 border-2 border-black rounded p-2'
			placeholder='Add todo...'
			value={value}
			onChange={(event) => setValue(event.target.value)}
		  />
		  <button
			type='submit'
			className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2'
		  >
			Submit
		  </button>
		</form>
	  );
	  
};

export default AddTodoForm;