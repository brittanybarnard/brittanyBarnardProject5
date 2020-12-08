import React, { Component } from 'react';
import Movies from './Movies.js';
import Button from './Button.js';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
      this.state = {name: '', thumbnail: ''}
  }

  componentDidMount() {
    //call AJAX using axios
    axios({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      responseType: 'json',
      params: {
        api_key: '6e56b6d943c654a15ce707b1399bebc5',
        query: 'christmas',
      },
    }).then((res) => {
      const { title, poster_path } = res.data.results[0]
      this.setState({ name: title, thumbnail: poster_path })
    })
  }

  handleClick = () => {
    const { name, thumbnail } = this.state
    console.log(name, thumbnail);
  }

    render() {
      return (
        <div className='movieApp'>
          <h1>Start Your Holidays!</h1>
          <Movies name={this.state.name} thumbnail={this.state.thumbnail} />
          <button onClick={() => this.handleClick()}>My Button</button>
          <Button />
        </div>
      );
    }
  }


export default App;
