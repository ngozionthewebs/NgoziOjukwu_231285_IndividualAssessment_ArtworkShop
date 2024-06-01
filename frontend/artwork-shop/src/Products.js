import React, { useState, useEffect } from 'react';
import './products.css';
import { Container, Row, Col } from 'react-bootstrap';
import SortDropdown from './sortDropdown';
import ProductCard from './productCard';
import ApiService from './services/api'; 
import ProductDetailsModal from './productModal';

const Products = () => {
    const [products, setProducts] = useState([]); 
    const [sortedProducts, setSortedProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null); 
    const [showModal, setShowModal] = useState(false); 
    const [sortCriteria, setSortCriteria] = useState('newest');

    useEffect(() => {
        ApiService.getProducts()
            .then(response => {
                setProducts(response.data); 
                setSortedProducts(response.data); 
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    useEffect(() => {
        applySorting(sortCriteria);
    }, [sortCriteria, products]);

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProduct(null);
    };

    const handleSortChange = (e) => {
        setSortCriteria(e.target.value);
    };

    const applySorting = (criteria) => {
        let sortedArray = [...products];
        switch (criteria) {
            case 'priceLowHigh':
                sortedArray.sort((a, b) => a.price - b.price);
                break;
            case 'priceHighLow':
                sortedArray.sort((a, b) => b.price - a.price);
                break;
            case 'alphaAsc':
                sortedArray.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'alphaDesc':
                sortedArray.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case 'newest':
                sortedArray.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                break;
            // Add other sorting criteria here
            default:
                break;
        }
        setSortedProducts(sortedArray);
    };

    return ( 
        <div className="products">
            <Container>
                <Row className="justify-content-center">
                    <Col md={12}>
                        <header className="text-center">
                            <div className='hero2'></div>
                        </header>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <div className="title">
                            <h1>FEATURED PRODUCTS</h1>
                        </div>
                    </Col>

                    <Col md={6}>
                        <SortDropdown onSortChange={handleSortChange} />
                    </Col>
                </Row>

                <Row>
                    {sortedProducts.map(product => (
                        <Col md={4} key={product._id}>
                            <ProductCard product={product} onClick={() => handleCardClick(product)} />
                        </Col>
                    ))}
                </Row>
            </Container>

            <ProductDetailsModal 
                show={showModal} 
                handleClose={handleCloseModal} 
                product={selectedProduct} 
            />

            <div className="footer"></div>
        </div>
    );
}

export default Products;
