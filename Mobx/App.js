import React from 'react';
import {useLocalStore,useObserver} from 'mobx-react';
import './App.css';

const StoreContext = React.createContext();

const StoreProvider = ({children}) =>
{
  const store = useLocalStore(() =>(
    {
       todos : ["Welcome to todo list"],
       addTodo: (todo) =>{
         store.todos.push(todo);
       },
        get todosCount()
        { 
         return store.todos.length;
        }  
    }));
    
    return( 
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>);
};

const TodosHeader =() =>{
  const store = React.useContext(StoreContext);
  return useObserver(() =>(
    <h1>You have {store.todosCount} todos pending !! </h1>
  ))
}

const Todolist = () =>
{
  const store = React.useContext(StoreContext);
  return useObserver(() => (
    <ul>
      {store.todos.map(todo=> (
      <li key={todo}>{todo}</li>
      ))}
    </ul>
  ));
};

const TodosForm = () =>{
  const store = React.useContext(StoreContext);
  const [todo,setTodo] = React.useState("");

  return(
    <form onSubmit={e=>{
      store.addTodo(todo);
      setTodo(" ");
      e.preventDefault();
    }}>
    <input type="text" value={todo} onChange={e => {setTodo(e.target.value)}}  /><br /><br />
    <button type="submit">Add</button>
    </form>
  )
}

export default function App() {
  return (
      <StoreProvider>
      <main>
      <TodosHeader />
      <Todolist />
      <TodosForm />
      </main>
      </StoreProvider>
  );
}


