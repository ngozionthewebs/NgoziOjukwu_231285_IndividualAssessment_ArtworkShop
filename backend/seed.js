require('dotenv').config(); // Ensure this is at the top if using .env for MONGO_URI
const mongoose = require('mongoose');
const Product = require('./models/Product'); // Adjust the path as necessary

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected for seeding'))
.catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
});


const products = [
    {
      title: "Abstract Art Piece",
      description: "A mesmerizing piece of abstract art.",
      price: 150,
      artist: "John Doe",
      imageUrl: "https://i.pinimg.com/564x/e6/3f/90/e63f909cf1345d5392870f86514e22c3.jpg",
      category: "Painting",
      stock: 10
    },
    {
      title: "Sculpture",
      description: "A modern sculpture made from recycled materials.",
      price: 300,
      artist: "Jane Smith",
      imageUrl: "https://i.pinimg.com/564x/e3/ef/7c/e3ef7ced9c3ede31cb0bbe92f6fe7faf.jpg",
      category: "Sculpture",
      stock: 5
    },
    {
      title: "Vintage Landscape",
      description: "A serene landscape painting, sense of peace.",
      price: 250,
      artist: "Alex Brown",
      imageUrl: "https://i.pinimg.com/564x/4b/f8/82/4bf8820b8cc2081a4334ecb57d3c7d82.jpg",
      category: "Painting",
      stock: 8
    },
    {
      title: "Modern Graffiti",
      description: "Street art captured on canvas, vibrant and expressive.",
      price: 190,
      artist: "Sam Rivera",
      imageUrl: "https://i.pinimg.com/564x/29/b8/4c/29b84c4c1cd283f960b5cb0b4e233c03.jpg",
      category: "Modern",
      stock: 12
    },
    {
      title: "Digital Artwork",
      description: "Digitally created dreamscapes, colorful and surreal.",
      price: 220,
      artist: "Casey Sun",
      imageUrl: "https://i.pinimg.com/564x/36/c4/40/36c440f452e85c6bb2cfce207b2e5c6c.jpg",
      category: "Digital",
      stock: 7
    },
    {
      title: "Portrait Oil Painting",
      description: "A detailed portrait painting that captures the soul.",
      price: 350,
      artist: "Morgan Yu",
      imageUrl: "https://i.pinimg.com/564x/1c/4a/da/1c4ada23f1fd0955cbb51dd9388a28d7.jpg",
      category: "Portrait",
      stock: 3
    },
    {
      title: "Metal Sculpture",
      description: "A contemporary metal sculpture, sleek and stark.",
      price: 450,
      artist: "Riley Blue",
      imageUrl: "https://i.pinimg.com/564x/f0/24/ef/f024ef0dd4458217e386087748385b10.jpg",
      category: "Sculpture",
      stock: 2
    },
    {
      title: "Watercolor Bird Illustration",
      description: "Charming bird illustrations in watercolor.",
      price: 120,
      artist: "Chris P. Bacon",
      imageUrl: "https://i.pinimg.com/564x/d4/b1/97/d4b19787e76241f7c066f9d6f2795ec1.jpg",
      category: "Illustration",
      stock: 10
    },
    {
      title: "Abstract Neon Lights",
      description: "Neon lights abstract, a play of light and shadows.",
      price: 270,
      artist: "Leslie Hope",
      imageUrl: "https://i.pinimg.com/564x/b2/c2/fe/b2c2fe7b33e4ac73f9c40baa4a8460ed.jpg",
      category: "Abstract",
      stock: 6
    },
    {
      title: "Cubist Artwork",
      description: "Cubism inspired artwork, breaking the norms of traditional forms.",
      price: 310,
      artist: "Harper Wilde",
      imageUrl: "https://i.pinimg.com/564x/50/12/63/50126305a03253a6bd03c3fa3d30b8a9.jpg",
      category: "Cubism",
      stock: 4
    },
    {
      title: "Impressionist Scene",
      description: "An impressionist painting of a bustling city scene.",
      price: 280,
      artist: "Toni Mahfud",
      imageUrl: "https://i.pinimg.com/564x/6f/ac/3a/6fac3aff6fad9272b7fd336621811bd7.jpg",
      category: "Impressionism",
      stock: 5
    },
    {
      title: "Renaissance Inspired Piece",
      description: "A piece inspired by the greats of the Renaissance.",
      price: 400,
      artist: "Ella Fitzgerald",
      imageUrl: "https://i.pinimg.com/564x/cf/36/3f/cf363f381a72a5b077e9134aafcf940d.jpg",
      category: "Renaissance",
      stock: 3
    }
  ];
  
  const seedDB = async () => {
    try {
      await Product.deleteMany({}); // Deletes all existing products
      await Product.insertMany(products);
      console.log('Database seeded!');
    } catch (err) {
      console.error("Seeding error:", err);
    } finally {
      mongoose.connection.close();
    }
  }
  
  seedDB();