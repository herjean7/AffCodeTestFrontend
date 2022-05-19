import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";

class TopNavigation extends Component {
    render() {
        let loginLink = '/login';
        let loginText = 'Login';
        if (this.props.logged) {
            loginLink = '/logout';
            loginText = 'Logout';
        }
        else {
            loginLink = '/login';
            loginText = 'Login';
        }
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink exact className="nav-link" to={loginLink}>Affyn Coding Test </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        logged: state.logged
    };
};

export default withRouter(connect(mapStateToProps)(TopNavigation));