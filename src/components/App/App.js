import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <br />
        </div>
      </Router>
    );
  }
}

export default App;
