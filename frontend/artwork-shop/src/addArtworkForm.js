import React, { useState } from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';

const AddArtworkForm = () => {
  const [artistName, setArtistName] = useState('');
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [artwork, setArtwork] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic, like sending data to a backend server
    console.log({ artistName, productName, category, price, artwork });
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