import React from 'react';
import { useDispatch } from 'react-redux';
import { clearTodos } from '../store/redux/todoSlice'; // Import the clearTodos action

const Card = ({ children }) => {
 const dispatch = useDispatch();

  // Handler for the clear button
  const handleClear = () => {
    dispatch(clearTodos());
  };

  
  
  return (
    <div className="w-1/2 h-3/5 bg-blue-100 shadow-2xl rounded-lg p-6 flex flex-col items-center space-y-10 justify-between">
      <div>
        <h1 className="text-4xl font-bold text-blue-700 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text tracking-wide mb-4">
          My Todo List
        </h1>
      </div>
      {/* Render the children inside the card */}
      {children}
      <button onClick={handleClear} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline">
        Clear
      </button>
    </div>
  );
};

export default Card;
