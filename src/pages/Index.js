import LoginNav from '../components/LoginNav'
import PostCard from '../components/PostCard'
import React, { Component } from 'react';

class Index extends Component {
  state = {
    postsList: [],
    loggedIn: 0
  };

  componentDidMount() {

    this.setLoginState();

    this.getPosts()
      .catch(err => console.log(err));
  }

  setLoginState() {
    this.state.loggedIn = window.sessionStorage.getItem("loggedIn");
  }

  getPosts = async () => {
    const response = await fetch('http://localhost:5000/api/posts');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    this.setState({ postsList: body})
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <LoginNav data={this.state.loggedIn} />
        {this.state.postsList.map(card => (
          <PostCard data={card}/>
        ))}
      </div>
    );
  }
}

export default Index;
