import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = ()=>
{
    return(

    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <div className="Container">
           <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
            </li>
          </ul>
          <Link className="btn btn-outline-light" to="/user/add">Add User</Link>
        </div>
       </div>
    </nav> 
    );
};

export default Navbar;
