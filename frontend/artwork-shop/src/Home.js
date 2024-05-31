import './home.css';
import { Container, Row, Col } from 'react-bootstrap';

import ProductCard from './productCard';


const Home = () => {

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
        </div>
        
     );
}
 
export default Home; 
