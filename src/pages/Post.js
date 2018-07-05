import CommentCard from '../components/CommentCard'
import React, { Component } from 'react';
import mongoose from 'mongoose';

class Post extends Component {
  state = {
    currentPost: {
      comments: []
    },
    comment: '',
    loggedIn: 0,
    userId: ''
  };

  componentDidMount() {
    this.setLoginState();

    this.getPost(this.getPostId())
      .catch(err => console.log(err));
  }

  setLoginState() {
    this.state.loggedIn = window.sessionStorage.getItem("loggedIn");

    if (window.sessionStorage.getItem("loggedIn")) {
      this.state.userId = window.sessionStorage.getItem("userId");
    }
  }

  getPostId() {
    const url_split = window.location.href.split('/')
    const post_id = url_split[url_split.length - 1];
    return post_id;
  }

  getPost = async (post_id) => {
    const response = await fetch('/api/post/' + post_id);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    this.setState({currentPost: body})

    console.log(body);
  };

  onChange(event) {
    this.setState({comment: event.target.value});
  }

  handleSubmit(event) {
    fetch('/api/post/comment', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        post_id: this.state.currentPost._id,
        author_id: this.state.userId,
        comment: this.state.comment
      })
    })
    event.preventDefault();
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>This is the specific post page</h1>
        <h3>{this.state.currentPost.title}</h3>
        <p>Description: {this.state.currentPost.description}</p>
        <p>Leave a comment below:</p>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Comment:
            <input type="text" value={this.state.comment} onChange={this.onChange.bind(this)} name="comment" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div class="comments">
          {this.state.currentPost.comments.map(comment => (
            <CommentCard data={comment} />
          ))}
        </div>
      </div>
    );
  }
}

export default Post;
