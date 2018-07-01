import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Index from './pages/Index'
import Post from './pages/Post'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Index} />
          <Route path="/post/:id" component={Post} />
        </div>
      </Router>
    );
  }
}

export default App;
