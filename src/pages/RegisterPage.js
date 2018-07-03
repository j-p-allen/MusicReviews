import React, { Component } from 'react';

class RegisterPage extends Component {
  render() {
    return (
      <div className="LoginPage">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
        <div class="container">
          <div class="col-sm-6 col-sm-offset-3">

            <h1><span class="fa fa-sign-in"></span> Signup</h1>

            <form action="/signup" method="post">
              <div class="form-group">
                <label>Email</label>
                <input type="text" class="form-control" name="email" />
              </div>
              <div class="form-group">
                <label>Username</label>
                <input type="text" class="form-control" name="username" />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" name="password" />
              </div>
              <div class="form-group">
                <label>Confirm Password</label>
                <input type="password" class="form-control" name="password-confirm" />
              </div>

             <button type="submit" class="btn btn-warning btn-lg">Signup</button>
            </form>

            <p>Already have an account? <a href="/login">Login</a></p>
            <p>Or go <a href="/">home</a>.</p>

          </div>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
