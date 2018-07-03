import React, { Component } from 'react';

class LoginNav extends Component {

  render() {
    return (
      <div className="login-nav">
         <a href="/login" class="btn btn-default"><span class="fa fa-user"></span>Login</a>
         <a href="/register" class="btn btn-default"><span class="fa fa-user"></span>Register</a>
      </div>
    )
  }
}

export default LoginNav;