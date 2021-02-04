import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './layout/Navbar';
import Error from './components/Error';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AddUser from './user/AddUser';
import EditUser from './user/EditUser';
import ViewUser from './user/ViewUser';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/user/add" component={AddUser} />
          <Route exact path="/user/edit/:id" component={EditUser} />
          <Route exact path="/user/view/:id" component={ViewUser} />
          <Route component={Error} />
        </Switch>
  
    </div>
    </BrowserRouter>
  );
}

export default App;
