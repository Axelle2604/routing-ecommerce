import React from 'react';

function Product(props) {
  const { image, title, id } = props;
  return <img src={image} alt={title} key={id} />;
}

export default Product;
