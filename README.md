# NgoziOjukwu_231285_IndividualAssessment_ArtworkShop
 Full-stack web application using the MERN stack (MongoDB, Express, React, Node.js) that performs CRUD (Create, Read, Update, Delete) operations

 # Artwork Shop


## DEMO VIDEO BELOW
https://drive.google.com/file/d/1WOTCybZPt86d5q25l-9VBn18m3jjaPIf/view?usp=sharing

## Overview

Artwork Shop is a platform for artists to share and sell their artwork. Users can view featured products, sort them by various criteria, and add their own artwork to the collection.

## Features

- View featured artwork products.
- Sort products by different criteria (newest, price, popularity, etc.).
- Add new artwork products with details such as artist name, product name, category, price, and stock quantity.
- View detailed information about each product in a modal.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/artwork-shop.git
    cd artwork-shop
    ```

2. **Install backend dependencies**

    ```bash
    cd backend
    npm install
    ```

3. **Install frontend dependencies**

    ```bash
    cd ../frontend
    npm install
    ```

4. **Create a `.env` file in the `backend` directory and add your MongoDB URI**

    ```
    MONGO_URI=mongodb://localhost:27017/artworkshop
    ```

## Running the Project

### Backend

1. **Start MongoDB**

    Ensure MongoDB is running. You can start MongoDB using the following command if you have installed it locally:

    ```bash
    mongod
    ```

2. **Seed the database (optional)**

    If you want to seed the database with initial data, run:

    ```bash
    cd backend
    node seed.js
    ```

3. **Start the backend server**

    ```bash
    npm start
    ```

    The backend server will start on port 5001.

### Frontend

1. **Start the frontend server**

    ```bash
    cd ../frontend
    npm start
    ```

    The frontend server will start on port 3000 and automatically open a new browser tab.

## Usage

### Viewing Products

1. Open the application in your browser (`http://localhost:3000`).
2. Navigate to the "Products" page to view the list of products.
3. Use the sort dropdown to sort products by various criteria.

### Adding New Artwork

1. Navigate to the "Community" page.
2. Fill in the form to add new artwork.
3. Click the "Submit" button to add the artwork to the collection.

### Viewing Product Details

1. On the "Products" page, click on any product card to view detailed information in a modal.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.


