import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/One'>One</Link></li>
              <li><Link to='/Two'>Two</Link></li>
              <li><Link to='/Three'>Three</Link></li>
              <li><Link to='/Four'>Four</Link></li>
            </ul>
          </nav>
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React class</h1>
        </header>

      </div>
    );
  }
}

export default App;
