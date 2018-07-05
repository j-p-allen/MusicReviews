import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Index from './pages/Index'
import Login from './pages/Login'
import Post from './pages/Post'
import Register from './pages/Register'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Index} />
          <Route path="/post/:id" component={Post} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;
