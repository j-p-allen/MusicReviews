import React, { Component } from 'react';
import mongoose from 'mongoose';

class Post extends Component {
  state = {
    currentPost: {},
    comment: ''
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

    this.setState({currentPost: body})
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
        // hard-coding this for now since we don't have auth.
        author_id: "41224d776a326fb40f000001",
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
      </div>
    );
  }
}

export default Post;
