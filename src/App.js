import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home.js';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
    </div>
  </BrowserRouter>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRouter />
      </div>
    );
  }
}

export default App;
