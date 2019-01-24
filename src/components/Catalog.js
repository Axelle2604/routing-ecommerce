import React, { Component } from 'react';
import Product from './Product.js';

import { Link } from 'react-router-dom';
const axios = require('axios');
const _ = require('lodash');

class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      listProducts: {},
      genre: '',
      listImg: [],
    };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const { data } = await axios.get(
      'https://gist.githubusercontent.com/stackerine/e99122e7548d02446698d04b996475f0/raw/b1b3bc9f788fd06900863f4c8350159637d209c5/catalog.json'
    );

    this.setState(
      {
        listProducts: data,
        genre: this.props.match.params.genre,
      },
      () => {
        const t = this.getProducts(
          this.state.listProducts[this.props.match.params.genre]
        );
        const d = _.flattenDeep(t);
        this.setState({
          listImg: d,
        });
        console.log(d);
      }
    );
  }

  getProducts(value) {
    console.log(value);
    if (_.isPlainObject(value)) {
      const tabObject = Object.values(value);
      return tabObject.map(category => this.getProducts(category));
    } else {
      return value;
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.match.params.genre}</h1>
        <h2>Category</h2>
        <div>
          <Link to={``} />
          {this.state.listImg.map(product => (
            <Product
              image={product.image}
              title={product.title}
              id={product.id}
              key={product.id}
            />
          ))}
        </div>
        <div />
      </div>
    );
  }
}

export default Catalog;
