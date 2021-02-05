import React,{Suspense} from 'react';
import Loader from '../../Components/Loader/LoaderModal';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
import Navbar from './layout/Navbar';
// import Error from './components/Error';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import AddUser from './user/AddUser';
// import EditUser from './user/EditUser';
// import ViewUser from './user/ViewUser';
 const Home = React.lazy(() => import('./components/Home'));
 const About = React.lazy(() => import('./components/About'));
 const Contact = React.lazy(() => import('./components/Contact'));
 const Error = React.lazy(() => import('./components/Error'));
 const AddUser = React.lazy(() => import('./user/AddUser'));
 const EditUser = React.lazy(() => import('./user/EditUser'));
 const ViewUser = React.lazy(() => import('./user/ViewUser'));

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/user/add" component={AddUser} />
          <Route exact path="/user/edit/:id" component={EditUser} />
          <Route exact path="/user/view/:id" component={ViewUser} />
          <Route component={Error} />
        </Switch>
        </Suspense>
    </div>
    </BrowserRouter>
  );
}
export default App;
