import React, { Component } from 'react';

class LoginPage extends Component {
  render() {
    return (
      <div className="LoginPage">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
        <div class="container">

          <div class="col-sm-6 col-sm-offset-3">

            <h1><span class="fa fa-sign-in"></span> Login</h1>

            <form action="/login" method="post">
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" name="email" />
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" name="password" />
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

export default LoginPage;
