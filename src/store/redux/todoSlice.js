import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getTodoAsync = createAsyncThunk('todos/getTodosAsync', 
    async () => {
        const response = await fetch('http://localhost:7000/todos');
        if (response.ok) {
            const todos = await response.json();
            return todos; 
        }
    }
);

const todoSlice = createSlice({
    name: 'todos',
    initialState: [], // Set initialState to an empty array
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            };
            state.push(newTodo);
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getTodoAsync.fulfilled, (state, action) => {
            return action.payload; // Directly return the fetched todos array
        });
    },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
