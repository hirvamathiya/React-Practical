import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodo, Todo, ToggleTodo } from './Types';
import {AddTodoForm} from './AddTodoForm'



const initialTodos:Array<Todo> =[
  {
  text:"Complete the Typescript with React practical implementation",
  complete:false
  },
  {
    text:"Start E-Commerce project HomePage Part",
    complete:false
  },
  {
    text:"Create more datasets for final year project",
    complete:false
  },
  {
    text:"Done with some changes in IEEE paper",
    complete:true
  },
  {
    text:"Create setup for E-commerce project",
    complete:true
  }
];


const App : React.FC = () =>{
    
     const[todos,setTodos] =useState(initialTodos)

     const toggleTodo:ToggleTodo = selectedTodo =>{
         const newTodos = todos.map(todo => {
           if(todo === selectedTodo){
             return{
                 ...todo,
                 complete:!todo.complete
             };
           }
           return todo;
         });
         setTodos(newTodos);
     };

     const addTodo:AddTodo = newTodo => { 
          newTodo.trim()!== "" && setTodos([...todos,{text:newTodo,complete:false}]);
     };
   
     return(
     <>
     <h1>Your Todo List :</h1>
     <AddTodoForm addTodo={addTodo}/>
     <TodoList todos={todos} toggleTodo={toggleTodo}/>
     </>
     );
};

export default App;
