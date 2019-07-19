import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

export class Dashboard extends Component {
    state = { redirectToReferrer: false };

    render() {
        let from = this.props.location.state || { from : { pathname: "/" }};
        let { redirectToReferrer } = this.state;

        if(redirectToReferrer) return <Redirect to={from} />;

        return (
            <div>
               <h1>Login Page</h1> 
            </div>
        )
    }
}

export default Dashboard
