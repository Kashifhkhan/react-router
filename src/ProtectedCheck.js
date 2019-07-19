import React, { Component } from 'react';
import {Route, Redirect } from "react-router-dom";

export class ProtectedCheck extends Component { 
    
    ({ component: Component, ...rest }) {
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
}

export default ProtectedCheck
