import React from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Product ID: {id}</h1>
      <p>This is the single product page for product #{id}</p>
    </div>
  );
};

export default SingleProduct;
