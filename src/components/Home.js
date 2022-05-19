import React, { Component } from 'react';
import {  Redirect } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div><Redirect to={{
                pathname: '/Login'
              }} /></div>
        );
    }
};

export default Home;