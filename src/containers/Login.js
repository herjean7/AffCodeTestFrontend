import React, { Component } from 'react';
import config from '../config.json';
import { connect } from "react-redux";
import { login } from "../actions/authActions";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { withRouter, Redirect } from "react-router-dom";
import SocialButton from "../components/SocialButton";

class Login extends Component {

  constructor (props) {
    super(props)

    this.state = {
      logged: false,
      user: {},
      currentProvider: '',
    }

    this.onLoginSuccess = this.onLoginSuccess.bind(this)
    this.onLoginFailure = this.onLoginFailure.bind(this)
  }

  onLoginSuccess (user) {
    console.log(user)

    this.setState({
      logged: true,
      currentProvider: user._provider,
      user
    })
  }

  onLoginFailure (err) {
    console.error(err)

    this.setState({
      logged: false,
      currentProvider: '',
      user: {}
    })
  }
  
  render() {
    let content = !!this.state.logged ?
      (
        <div>
          <Redirect to={{
            pathname: '/Dashboard'
          }} />
        </div>
      ) :
      (
        <div>
          <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <br></br>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          
          <Typography component="h1" variant="h5">
            Welcome
          </Typography>
          <br></br>
          <SocialButton
            provider="facebook"
            appId={config.FACEBOOK_ID}
            onLoginSuccess={this.onLoginSuccess}
            onLoginFailure={this.onLoginFailure}
          >
            Facebook Login
        </SocialButton>
        </Box>
        </div>

      );

    return (
      <div>
          {content}
      </div>
    );
  }
};


const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (token) => {
      dispatch(login(token));
    }
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));