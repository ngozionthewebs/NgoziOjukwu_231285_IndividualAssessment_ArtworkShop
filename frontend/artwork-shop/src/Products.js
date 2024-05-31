import './products.css';
import { Container, Row, Col } from 'react-bootstrap';
import SortDropdown from './sortDropdown';
import ProductCard from './productCard';

const Products = () => {

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
                        <SortDropdown></SortDropdown>
                        
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>
                        <ProductCard></ProductCard>
                    
                    </Col>

                    <Col md={4}>
                        <ProductCard></ProductCard>
                    
                    </Col>

                    <Col md={4}>
                        <ProductCard></ProductCard>
                    
                    </Col>


                </Row>

                <Row>
                    <Col md={4}>
                        <ProductCard></ProductCard>
                    
                    </Col>

                    <Col md={4}>
                        <ProductCard></ProductCard>
                    
                    </Col>

                    <Col md={4}>
                        <ProductCard></ProductCard>
                    
                    </Col>


                </Row>

                <Row>
                    <Col md={4}>
                        <ProductCard></ProductCard>
                    
                    </Col>

                    <Col md={4}>
                        <ProductCard></ProductCard>
                    
                    </Col>

                    <Col md={4}>
                        <ProductCard></ProductCard>
                    
                    </Col>


                </Row>

            </Container>




            <div className="footer"></div>
        </div>
        
     );
}
 
export default Products; 