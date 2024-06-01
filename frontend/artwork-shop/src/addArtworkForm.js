import React, { useState } from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import ApiService from './services/api'; // Assuming this is the correct path to your ApiService

const AddArtworkForm = () => {
  const [artistName, setArtistName] = useState('');
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState(''); // New state for stock
  const [artwork, setArtwork] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('artist', artistName);
    formData.append('title', productName);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('stock', stock);
    formData.append('artwork', artwork);

    try {
      await ApiService.createProduct(formData); // Adjust this according to your backend API structure
      alert('Artwork added successfully!');
    } catch (error) {
      console.error('Error adding artwork:', error);
      alert('Artwork added successfully!');
    }
  };

  const handleFileChange = (e) => {
    setArtwork(e.target.files[0]);
  };

  return (
    <Form onSubmit={handleSubmit} className="p-3">
      <Form.Group controlId="artistName" className="mb-3">
        <Form.Label>Artist Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter artist name"
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="productName" className="mb-3">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="category" className="mb-3">
        <Form.Label>Product Category</Form.Label>
        <Form.Control as="select" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Photography</option>
          <option>Painting</option>
          <option>Sculpture</option>
          <option>Digital Art</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="price" className="mb-3">
        <Form.Label>Desired Price</Form.Label>
        <InputGroup>
          <InputGroup.Text>$</InputGroup.Text>
          <FormControl
            type="number"
            placeholder="Enter desired price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </InputGroup>
      </Form.Group>

      <Form.Group controlId="stock" className="mb-3"> {/* New form group for stock */}
        <Form.Label>Stock</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter stock quantity"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="artwork" className="mb-3">
        <Form.Label>Artwork Upload</Form.Label>
        <Form.Control type="file" onChange={handleFileChange} />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3">
        Submit
      </Button>
    </Form>
  );
};

export default AddArtworkForm;
