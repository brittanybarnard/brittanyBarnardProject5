import { Component } from 'react';
import Movies from './Movies.js';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
      this.state = {name: '', thumbnail: '', movieInformation: []}
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
      console.log(res.data);
      // const movieInformation = res.data.results
      this.setState({ movieInformation: res.data.results })
      console.log(this.state.movieInformation);
      // this.setState({ name: title, thumbnail: poster_path })
    })
  }

  handleClick = () => {
    const randomizer = Math.floor(Math.random() * this.state.movieInformation.length); 
    const movieResult = this.state.movieInformation[randomizer]  
    this.setState({
      name: movieResult.title,
      thumbnail: movieResult.poster_path
    })
    console.log(this.state);
  }

    render() {
      return (
        <div className='movieApp'>
          <h1>Start Your Holidays!</h1>
          <button onClick={() => this.handleClick()}>Find me a holiday movie!</button>
          <Movies name={this.state.name} thumbnail={this.state.thumbnail} />
        </div>
      );
    }
  }


export default App;
