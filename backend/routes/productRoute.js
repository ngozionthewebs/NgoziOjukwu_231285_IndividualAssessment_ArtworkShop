const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Function to setup routes with multer
module.exports = (upload) => {

  // CREATE a new product
  router.post('/', upload.single('artwork'), async (req, res) => {
    console.log('Body:', req.body);
    console.log('File:', req.file);

    const productData = {
      artist: req.body.artist,
      title: req.body.title,
      category: req.body.category,
      price: req.body.price,
      stock: req.body.stock,
      imageUrl: req.file ? `/uploads/${req.file.filename}` : ''
    };

    const product = new Product(productData);
    try {
      await product.save();
      res.status(201).send(product);
    } catch (error) {
      console.error('Error saving product:', error);
      res.status(400).send(error);
    }
  });

  // READ all products
  router.get('/', async (req, res) => {
    try {
      const products = await Product.find({});
      res.send(products);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  // UPDATE a product by id
  router.put('/:id', upload.single('artwork'), async (req, res) => {
    const productData = {
      artist: req.body.artist,
      title: req.body.title,
      category: req.body.category,
      price: req.body.price,
      stock: req.body.stock,
    };

    if (req.file) {
      productData.imageUrl = `/uploads/${req.file.filename}`;
    }

    try {
      const product = await Product.findByIdAndUpdate(req.params.id, productData, { new: true, runValidators: true });
      if (!product) {
        return res.status(404).send();
      }
      res.send(product);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  // DELETE a product by id
  router.delete('/:id', async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).send();
      }
      res.send(product);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  return router;
};
