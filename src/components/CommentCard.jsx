import React, { Component } from 'react';

class CommentCard extends Component {

  render() {
    return (
      <div className="commentcard">
        <p>Submitted by: {this.props.data.author.username}</p>
        <p>Comment: {this.props.data.comment}</p>
      </div>
    )
  }
}

export default CommentCard;