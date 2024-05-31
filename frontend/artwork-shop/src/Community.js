import './community.css'
import { Container, Row, Col } from 'react-bootstrap';
import AddArtworkForm from './addArtworkForm';


const Community = () => {

    return ( 
        <div className="products">
            <Container>
                <Row className="justify-content-center">
                        <Col md={12}>
                        <header className="text-center">
                            <div className='hero5'></div>
                            
                        </header>
                        </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <div className="title">
                            <h1>ADD YOUR ARTWORK</h1>
                        </div>
                        <div className="comp">
                            <AddArtworkForm></AddArtworkForm>
                        </div>
                        
                    </Col>

                    <Col md={6}>

                        <div className="pic"></div>
                        
                        
                    </Col>
                </Row>


            </Container>




            <div className="footer"></div>
        </div>
        
     );
}
 
export default Community; 