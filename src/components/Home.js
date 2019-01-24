import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Product from './Product';
import './home.css';
const axios = require('axios');

class Home extends Component {
  constructor() {
    super();
    this.state = {
      listProducts: [],
    };
  }

  async loadData() {
    const { data } = await axios.get(
      'https://gist.githubusercontent.com/stackerine/e99122e7548d02446698d04b996475f0/raw/b1b3bc9f788fd06900863f4c8350159637d209c5/products.json'
    );
    const tabProducts = data.slice(0, 10);
    this.setState({
      listProducts: tabProducts,
    });
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <div>
        <header>
          <NavLink to="./femme">FEMME</NavLink>
          <NavLink to="./homme">HOMME</NavLink>
          <NavLink to="./enfant">ENFANT</NavLink>
          <NavLink to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Zalando_logo.svg/1280px-Zalando_logo.svg.png"
              alt="Logo Zalando"
              className="logo"
            />
          </NavLink>
        </header>
        <div>
          {this.state.listProducts.map(product => (
            <Product
              image={product.image}
              title={product.title}
              id={product.id}
              key={product.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
