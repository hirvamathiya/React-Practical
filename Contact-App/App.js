import React ,{Suspense} from 'react';
import Navbar from './components/Navbar';
import {Provider} from 'react-redux';
import store from './store.js';
import { BrowserRouter, Switch,Route} from 'react-router-dom';
import './styles/App.scss';
//import Contacts from './components/contacts/Contacts';
//import AddContact from './components/contacts/AddContact';
//import EditContact from './components/contacts/EditContact';
const Contacts = React.lazy(() => import('./components/contacts/Contacts'));
const AddContact = React.lazy(() => import('./components/contacts/AddContact'));
const EditContact = React.lazy(() => import('./components/contacts/EditContact'));

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <div className="App">
    <Navbar />
    <Suspense fallback={<div>Loading...</div>}>
    <div className="container">
       <div className="py-3">
         <Switch>
          <Route exact path="/" component={Contacts} />
          <Route exact path="/contacts/add" component={AddContact} />
          <Route exact path="/contacts/edit/:id" component={EditContact} />
         </Switch>
       </div>
    </div> 
    </Suspense>
    </div>
   </Provider>
   </BrowserRouter>
  );
}

export default App;
