import React, { Component } from 'react';
import PostCard from '../components/PostCard'

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
