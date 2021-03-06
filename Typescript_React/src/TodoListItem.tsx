import React from 'react';
import { Todo, ToggleTodo } from './Types';

interface TodoListItemProps{
    todo : Todo;
    toggleTodo:ToggleTodo
};


export const TodoListItem:React.FC<TodoListItemProps> = ({ todo,toggleTodo }) =>
             <li>
             <label style={{textDecoration :todo.complete? "line-through" : ""}}>
              <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)}/>
              {todo.text}
             </label>
            </li>;
};

