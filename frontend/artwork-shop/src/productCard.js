import React from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCard = ({ product , onClick }) => {

  if (!product) { // Check if product is undefined or null
    return <div>Loading...</div>; // Render a loading message or spinner
  }

  return (
    <div className="card" onClick={onClick}>
        <div className="cardImage">
            <img src={product.imageUrl} alt={product.title} style={{ width: '370px', height: '544px', objectFit: 'cover' }} />
        </div>
        <div className="info">
            <strong>{product.title}</strong><br />
            {product.description}<br />
            <br />
            {product.artist}<br />
            <span>Price: ${product.price}</span>
        </div>
    </div>
  );
};

export default ProductCard;
