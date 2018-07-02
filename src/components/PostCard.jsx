import React, { Component } from 'react';

class PostCard extends Component {

  render() {
    return (
      <div className="postcard">
        <a href={"/post/" + this.props.data._id}><h1 id={this.props.data._id}>{this.props.data.title}</h1></a>
      </div>
    )
  }
}

export default PostCard;