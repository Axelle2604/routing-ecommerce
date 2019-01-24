import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home.js';
import ProductScreen from './components/ProductScreen.js';
import Catalog from './components/Catalog.js';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path={`/product/:productId`} component={ProductScreen} />
      <Route exact path={`/:genre`} component={Catalog} />
      <Route exact path={`/:genre/:category`} component={Catalog} />
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
