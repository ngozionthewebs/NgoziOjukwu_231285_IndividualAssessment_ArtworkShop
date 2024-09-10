
<img width="1920" alt="Group 12" src="https://github.com/user-attachments/assets/7bde06ba-9f41-4aae-b54e-a06407dcde7d">

## About The Art Shop

**The Art Shop** is a full-stack web application using the MERN stack (MongoDB, Express, React, Node.js) that allows artists to showcase and sell their artwork. Users can explore featured art, sort by various criteria, and add their own pieces to the collection. With full CRUD capabilities, it offers a seamless experience for managing and discovering art, making it the go-to platform for artists and art enthusiasts alike.

## Built With

[![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=for-the-badge)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white&style=for-the-badge)](https://expressjs.com/)
[![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black&style=for-the-badge)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge)](https://nodejs.org/)



## The Art Shop Profile Screenshot
<img width="1440" alt="Screenshot 2024-09-10 at 09 05 29" src="https://github.com/user-attachments/assets/462188b9-b9d1-4282-aa7e-9c4f21961cd3">

## Installation

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community)

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


## Features


| Page                | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| **Home Page**       | - Displays the latest products <br>- talks about what the platform is all about <br>- user can view products |
| **Products Page**| - User is able to view products <br>- Enables users to fliter products and view Indivual products in a modal.  |
| **Create a Post Page**| - User create a post  <br>- Enables users to fill in details about the said product and post on the products page |
|**Individual Art Page**|View detailed information about each product in a modal.|


## The Idea

The idea behind The Art Shop is to build a comprehensive platform where artists can effortlessly showcase their work and connect with art enthusiasts. It provides a seamless experience for users to explore diverse artworks, sort and filter by various criteria, and make purchases. The Art Shop aims to bridge the gap between creators and collectors, offering a vibrant space for discovering, buying, and managing art. It’s designed to enhance visibility for artists and simplify the art discovery process for users, fostering a thriving community around creativity and artistic expression.

## UI Design

### Home Page
![Homepage](https://github.com/user-attachments/assets/e5fad073-5c7f-4042-8deb-22f91e55032a)

### Products Page
<img width="1440" alt="Screenshot 2024-09-10 at 09 05 29" src="https://github.com/user-attachments/assets/75744520-e86b-4179-a23f-871a36fce999"><img width="1440" alt="Screenshot 2024-09-10 at 09 06 12" src="https://github.com/user-attachments/assets/5e5f00a8-90cf-4b81-a8f0-144a4d470d1b">



### Community Page
![Community](https://github.com/user-attachments/assets/0b15461f-961e-40c1-819d-d5b9d3932c48)

### Individual Art Page
<img width="1440" alt="Screenshot 2024-09-10 at 09 05 18" src="https://github.com/user-attachments/assets/e8934a1b-2a34-4966-9d67-6c9b1c93a384">

### Highlights
User-Friendly Interface: Easy navigation for exploring and purchasing artworks.
Advanced Search: Filter and sort artworks for better discovery.
Responsive Design: Consistent experience across all devices.

### Challenges
Scalability: Ensuring the platform can scale effectively as the user base grows, while maintaining performance and responsiveness.
Security: Implementing secure authentication and authorization mechanisms to protect user data and prevent unauthorized access.
Content Moderation: Creating efficient processes for content moderation, allowing admins to manage the quality of content without overwhelming manual efforts.
User Engagement: Encouraging user interaction and participation while maintaining the platform's ease of use and simplicity in navigating and contributing content.

## Mockups

### Home Page
![Free_MacBook_Pro_1 copy](https://github.com/user-attachments/assets/bcf5c6f0-32ce-4f8b-bb2c-43cbd156d81a)
![Free_MacBook_Pro_2 copy](https://github.com/user-attachments/assets/90c9dc88-7dc0-4e24-a975-27de65730c25)


### Products Page
![Free_MacBook_Pro_3 copy](https://github.com/user-attachments/assets/d58d5ba0-cab6-4c82-a12b-3f47bfd0db9b)
![Free_MacBook_Pro_4 copy](https://github.com/user-attachments/assets/8c8dea8e-9e4f-4543-a108-e66aa3107c24)



### Create a Post Page
![Free_MacBook_Pro_6 copy](https://github.com/user-attachments/assets/077bf612-784d-4625-82c6-f14d0f8749d7)
![Free_MacBook_Pro_7 copy](https://github.com/user-attachments/assets/1bf2a58c-b776-4e3e-8f4b-eef0d32fac86)





## Demonstration Video

```
https://drive.google.com/file/d/1WOTCybZPt86d5q25l-9VBn18m3jjaPIf/view?usp=sharing
```

## License

This project is licensed under the MIT License.


