import React from 'react';
import useChangeColor from './useChangeColor';
import useOrderCount from './useOrderCount';
import useDocumentTitle from './useDocumentTitle';
import useInput from './useInput';

function App() {

   const { orderCount , changeOrderCount } = useOrderCount();

   const { color, changeColor } = useChangeColor();

   const { count ,increment } = useDocumentTitle();

   const [firstname, bindfirstname, resetfirstname ] = useInput();

   const [lastname , bindlastname, resetlastname] = useInput();

  const submitHandler = (e) =>{
     e.preventDefault();
     alert(`Hello ${firstname} ${lastname}`)
     resetfirstname();
     resetlastname();
  }
  return (
    <div className="App" style={{ backgroundColor:"#"+ color}}>
       <h1>Change Order Count Hook Demo {orderCount}</h1>
       <button onClick={changeOrderCount}>Increment : {orderCount}</button><hr />

       <h1>Change Background Color Hook Demo</h1>
       <button onClick={changeColor}>Change Color</button><hr />
       
       <h1>Change Document title Hook Demo</h1> 
       <button onClick={increment}>Count : {count}</button>  <hr /> 

       <div>
         <h1>Change Form Input Hook Demo</h1>
         <form onSubmit={submitHandler}>
           <label>FirstName</label> 
           <input type="text" {...bindfirstname} /><br/><br/>
           <label>LastName</label>
           <input type="text" {...bindlastname}/><br/><br/>
           <button>Submit</button>
           </form> 

       </div> 
    </div>
  );
}

export default App;
