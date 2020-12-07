import React, { Component } from 'react';
import Movies from './Movies.js';
import Button from './Button.js';
import './App.css';

class App extends Component {

    render() {
      return (
        <div className='movieApp'>
          <h1>Start Your Holidays!</h1>
          <Movies />
          <Button />
        </div>
      );
    }
  }


export default App;
