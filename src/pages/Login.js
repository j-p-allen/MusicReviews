import React, { Component } from 'react';

class Login extends Component {

  state = {
    formData: {
      username: '',
      password: ''
    }
  };

  handleDataChange(event){
    const {name, value} = event.target;
    let formData = Object.assign({}, this.state.formData);
    formData[name] = value;
    return this.setState({formData})
  }

  handleUserLogin(event){
    fetch('/api/user/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.formData.username,
        password: this.state.formData.password
      })
    })
    .then(function(res) {
      if (res.ok) {
        res.json().then(function(data) {
          if (data.loggedIn) {
            window.sessionStorage.setItem("loggedIn", 1);
            window.sessionStorage.setItem("userId", data.userId);
          }
        })
      }
    })
    event.preventDefault();
  }
  render() {
    return (
      <div className="Login">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
        <div class="container">

          <div class="col-sm-6 col-sm-offset-3">

            <h1><span class="fa fa-sign-in"></span> Login</h1>

            <form onSubmit={this.handleUserLogin.bind(this)}>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" name="username" value={this.state.formData.username} onChange={this.handleDataChange.bind(this)} />
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" name="password" value={this.state.formData.password} onChange={this.handleDataChange.bind(this)} />
                </div>
        
                <button type="submit" class="btn btn-warning btn-lg">Login</button>
            </form>
            <p>Need an account? <a href="/register">Signup</a></p>
            <p>Or go <a href="/">home</a>.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
