import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Index from './pages/Index'
import LoginPage from './pages/LoginPage'
import Post from './pages/Post'
import RegisterPage from './pages/RegisterPage'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Index} />
          <Route path="/post/:id" component={Post} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
        </div>
      </Router>
    );
  }
}

export default App;
