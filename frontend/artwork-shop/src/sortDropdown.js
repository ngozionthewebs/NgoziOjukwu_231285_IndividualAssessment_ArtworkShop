import React from 'react';
import { Form } from 'react-bootstrap';
import './products.css';

const SortDropdown = ({ onSortChange }) => {
  return (
    <Form>
      <Form.Group controlId="sortProducts">
        <Form.Label>Sort By</Form.Label>
        <Form.Control as="select" onChange={onSortChange}>
          <option value="newest">Newest Additions</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          <option value="popularity">Popularity</option>
          <option value="alphaAsc">Alphabetical: A to Z</option>
          <option value="alphaDesc">Alphabetical: Z to A</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default SortDropdown;
