import React, { useState, useEffect } from 'react';
import './home.css';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './productCard';
import ApiService from './services/api'; 
import ProductDetailsModal from './productModal';


const Home = () => {

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null); // State for the selected product
    const [showModal, setShowModal] = useState(false); // 

    useEffect(() => {
        ApiService.getProducts()
            .then(response => {
                setProducts(response.data); // Assuming the response data is the array of products
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProduct(null);
    };



    return ( 
        <div className="home">
             <Container>
                <Row className="justify-content-center">
                    <Col md={12}>
                    <header className="text-center">
                        <div className='hero'></div>
                        
                    </header>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <div className="title">
                            <h1>FEATURED PRODUCTS</h1>
                        </div>
                        
                    </Col>
                </Row>

                <Row>
                    {products.slice(0, 3).map(product => (
                            <Col md={4} key={product._id}>
                                <ProductCard product={product} onClick={() => handleCardClick(product)} />
                            </Col>
                    ))}

                </Row>

                <Row>
                    <Col md={6}>

                        <div className="image"></div>
                        
                    </Col>

                    <Col md={6}>

                        <div className="text">
                            <h2>Be part of <br />
                                the community</h2>



                            <p>Our Artwork Shop's Community Page provides a vibrant platform <br />
                            for artists to not only share but also sell their art, fostering a <br />
                            supportive environment where creativity thrives. Whether you're <br />
                            a seasoned artist or a budding talent, our community is the<br />
                            perfect place to showcase your artwork. By uploading your<br />
                            creations to the Community Page, you can reach a broader<br />
                            audience, receive feedback, and connect with fellow art<br />
                            enthusiasts. Selling on our platform is straightforward; after<br />
                            uploading your art, simply enable the 'For Sale' option and set<br />
                            your price. Our seamless integration handles the rest, from<br />
                            secure transactions to customer inquiries, allowing you to <br />
                            focus on what you love most—creating art. Join our community<br />
                            today, and start sharing and selling your artwork in <br />
                            just a few clicks</p>    
                        </div>
                    </Col>
                </Row>

            <footer></footer>
            </Container>

            <ProductDetailsModal 
                show={showModal} 
                handleClose={handleCloseModal} 
                product={selectedProduct} 
            />
        </div>
        
     );
}
 
export default Home; 
