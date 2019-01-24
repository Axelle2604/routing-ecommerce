import React, { Component } from 'react';
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
    this.setState(
      {
        listProducts: tabProducts,
      },
      console.log(this.state.listProducts)
    );
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <div>
        <h1>HOME PAGE</h1>
        <div>
          {this.state.listProducts.map(product => (
            <img src={product.image} alt={product.title} key={product.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
