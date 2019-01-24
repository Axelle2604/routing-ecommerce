import React from 'react';
import { Link } from 'react-router-dom';

function Product(props) {
  const { image, title, id } = props;

  return (
    <Link to={`/product/${id}`}>
      <img src={image} alt={title} />
    </Link>
  );
}

export default Product;
