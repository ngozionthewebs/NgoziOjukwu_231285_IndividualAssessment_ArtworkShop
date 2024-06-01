import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ProductDetailsModal = ({ show, handleClose, product }) => {
  if (!product) return null; // If no product, return null

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{product.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={product.imageUrl} alt={product.title} style={{ width: '100%', height: 'auto' }} />
        <p><strong>Artist:</strong> {product.artist}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Stock:</strong> {product.stock}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductDetailsModal;
