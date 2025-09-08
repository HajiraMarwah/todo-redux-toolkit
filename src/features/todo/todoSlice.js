import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState={
    todos:[{id:1,text:"hello world"}]
}
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{  //in reducers have properties and functions and in redux toolkit we write definations also unlike in context api
      addTodo:()=>{ //here whenever we  add todo have acess to both state(variables give access to state everytime) and actions( values comes from this action)
         const todo={
            id:nanoid(),
            text:action.payload  //payload is object
         }
         state.todos.push(todo)
      },
      removeTodo:(state,action)=>{
        state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
      }

      },
    
})
export const{addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer