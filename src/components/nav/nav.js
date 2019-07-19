import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { NavLink } from 'react-router-dom';


export default function ButtonAppBar() {
  return (
      <AppBar position="static">   
        <div className="app-header">
            <NavLink to="/" exact activeStyle={{className: 'active'}}>
                Home
            </NavLink>                
            <NavLink to="/user/login" activeStyle={{className: 'active'}}>
                User Login
            </NavLink>               
            <NavLink to="/editor/login" activeStyle={{className: 'active'}}>
                Editor Login
            </NavLink>               
            <NavLink to="/admin/login" activeStyle={{className: 'active'}}>
                Admin Login
            </NavLink>               
            <NavLink to="/dashboard" activeStyle={{className: 'active'}}>
                Dashboard
            </NavLink>
        </div>     
      </AppBar>
  );
}