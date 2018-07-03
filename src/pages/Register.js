import React, { Component } from 'react';

class Register extends Component {

  state = {
    formData: {
      username: '',
      email: '',
      password: '',
      passwordConfirm: ''
    }
  };

  handleDataChange(event){
    const {name, value} = event.target;
    let formData = Object.assign({}, this.state.formData);
    formData[name] = value;
    return this.setState({formData})
  }

  handleUserReg(event){
    console.log(event);
    if (this.state.formData.password != this.state.formData.passwordConfirm) {
      alert('Passwords do not match.');
      event.preventDefault();
    }
    else {
      console.log(this.state.formData);
      fetch('/api/user/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.formData.username,
          email: this.state.formData.email,
          password: this.state.formData.password
        })
      })
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className="RegisterPage">
        <div class="container">
          <div class="col-sm-6 col-sm-offset-3">
            <h1><span class="fa fa-sign-in"></span> Register</h1>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
            <form onSubmit={this.handleUserReg.bind(this)}>
              <div class="form-group">
                <label>Email</label>
                <input type="text" class="form-control" name="email" value={this.state.formData.email} onChange={this.handleDataChange.bind(this)} />
              </div>
              <div class="form-group">
                <label>Username</label>
                <input type="text" class="form-control" name="username" value={this.state.formData.username} onChange={this.handleDataChange.bind(this)} />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" name="password" value={this.state.formData.password} onChange={this.handleDataChange.bind(this)} />
              </div>
              <div class="form-group">
                <label>Confirm Password</label>
                <input type="password" class="form-control" name="passwordConfirm" value={this.state.formData.passwordConfirm} onChange={this.handleDataChange.bind(this)} />
              </div>

             <input type="submit" value="Register" />
            </form>

            <p>Already have an account? <a href="/login">Login</a></p>
            <p>Or go <a href="/">home</a>.</p>

          </div>
        </div>
      </div>
    );
  }
}

export default Register;
