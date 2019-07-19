import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
  // withRouter
} from "react-router-dom";
import ButtonAppBar from './components/nav/nav';
import Home from './components/pages/home/home';
import UserLogin from './components/pages/login/user/login';
import EditorLogin from './components/pages/login/editor/login';
import AdminLogin from './components/pages/login/admin/login';
import Dashboard from './components/pages/dashboard/dashboard';
import Pagenotfound from './components/pages/notfound/notfound';
// import { PrivateRoute } from './ProtectedCheck';


class App extends Component {  

  render() {
    function PrivateRoute({ component: Component, ...rest }) {
      const fakeAuth = {
        isAuthenticated: false,
        authenticate(cb) {
          this.isAuthenticated = true;
          setTimeout(cb, 100); // fake async
        },
        signout(cb) {
          this.isAuthenticated = false;
          setTimeout(cb, 100);
        }
      };
      return (
        <Route
          {...rest}
          render={props =>
            fakeAuth.isAuthenticated ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: props.location }
                }}
              />
            )
          }
        />
      );
    }
    const routes = [ 
      {
        path: "/user",
        component: UserLogin,
        routes: [
          {
            path: "/user/login",
            component: UserLogin
          }
        ]       
      },
      {
        path: "/editor",
        component: EditorLogin,
        routes: [
          {
            path: "/editor/login",
            component: EditorLogin
          }
        ]
      },
      {
        path: "/admin",
        component: AdminLogin,
        routes: [
          {
            path: "/admin/login",
            component: AdminLogin
          }
        ]           
      },
      {
        path: "/dashboard",
        component: Dashboard
      },
      {
        path: "/",
        component: Home,        
        exact: true
      },
      {
        path: "",
        component: Pagenotfound
      }      
    ];

    return (
      <div className="App">
        <Router>
            <ButtonAppBar />
            <div className="container">
                <Switch>                   
                  {routes.map((route, i) => (
                    <Route
                    key={i} 
                    path={route.path}
                    render={props => (
                      // pass the sub-routes down to keep nesting
                      <route.component {...props} routes={route.routes} />
                    )}
                    />                
                  ))}                
                </Switch>
              </div>
        </Router>
      </div>
    );
  }
}

export default App;
