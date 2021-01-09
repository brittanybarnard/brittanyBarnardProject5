import { Component, createRef } from 'react';
import Movies from './Movies.js';
import Footer from './Footer.js';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
      this.myRef = createRef();
      this.state = {name: '', thumbnail: '', movieDescription: '', movieInformation: []}
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
      this.setState({ movieInformation: res.data.results })
    })
  }

  handleClick = () => {
    const randomizer = Math.floor(Math.random() * this.state.movieInformation.length); 
    const movieResult = this.state.movieInformation[randomizer]  
    this.setState({
      name: movieResult.title,
      thumbnail: movieResult.poster_path,
      movieDescription: movieResult.overview
    }, () => {
      this.executeScroll();
    })
  }

  executeScroll = () => this.myRef.current.scrollIntoView()  

    render() {
      return (
        <div className='movieApp'>
          <header className="landingPage wrapper">
              <h1>Start Your Holidays!</h1>
              <button onClick={() => this.handleClick()}>Find me a holiday movie!</button>
          </header>
          {this.state.name 
          ? <Movies name={this.state.name} thumbnail={this.state.thumbnail} movieDescription={this.state.movieDescription} myRef={this.myRef} /> 
          : ''}
            <Footer />
        </div>
      );
    }
  }


export default App;
