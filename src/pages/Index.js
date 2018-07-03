import LoginNav from '../components/LoginNav'
import PostCard from '../components/PostCard'
import React, { Component } from 'react';

class Index extends Component {
  state = {
    postsList: []
  };

  componentDidMount() {
    this.callApi()
      //.then(res => this.setState({ postsList: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('http://localhost:5000/api/posts');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    this.setState({ postsList: body})
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <LoginNav />
        {this.state.postsList.map(card => (
          <PostCard data={card}/>
        ))}
      </div>
    );
  }
}

export default Index;
