import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos:[]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
  addTodo: (state,action) =>void(state.todos=action.payload.todos)  
    ,
    addTodo2:(state,action)=>{
    const todo=action.payload.todo
    state.todos.push(todo);
    },
    removeTodo:(state,action) =>void(state.todos= state.todos.filter((todo)=>{return todo.id!==action.payload.id})),

    removeTodos:(state)=>void(state.todos=[])
},
})

// Action creators are generated for each case reducer function
export const {addTodo, removeTodo,addTodo2,updateTodo,removeUpdatedTodo,removeTodos} =todoSlice.actions

export default todoSlice.reducer