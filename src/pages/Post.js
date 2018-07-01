import React, { Component } from 'react';

class Post extends Component {
  state = {
    currentPost: {}
  };

  componentDidMount() {
    const url_split = window.location.href.split('/')
    const post_id = url_split[url_split.length - 1];
    this.callApi(post_id)
      .catch(err => console.log(err));
  }

  callApi = async (post_id) => {
    const response = await fetch('http://localhost:5000/api/post/' + post_id);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    this.setState({ currentPost: body})
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>This is the specific post page</h1>
        <h3>{this.state.currentPost.title}</h3>
        <p>Description: {this.state.currentPost.description}</p>
        <p>Leave a comment below</p>
      </div>
    );
  }
}

export default Post;
