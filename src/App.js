import React, { Component } from 'react';
import {Router, Route, BrowserRouter } from 'react-router';

import Home from './home/home';

import "./App.css";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Route  path="/" component={Home}/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
