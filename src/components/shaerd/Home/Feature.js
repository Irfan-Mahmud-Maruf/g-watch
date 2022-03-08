import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import support from '../../../assets/images/24-hours-support.png';
import featureimg from '../../../assets/images/feature.jpg';

const Feature = () => {
    return (
        <Container>
            <Row className='align-items-end'>
                <Col md={4}>
                    <img src={featureimg} alt="" className='rounded-3 w-100'/>
                </Col>

                <Col md={4}>
                    <div>
                        <img src={support} alt="" />
                        <h5>Build Quality and Design</h5>
                        <p className='text-muted'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, soluta deserunt! Rerum culpa odit id!</p>
                    </div>
                    <div>
                        <img src={support} alt="" />
                        <h5>Build Quality and Design</h5>
                        <p className='text-muted'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, soluta deserunt! Rerum culpa odit id!</p>
                    </div>
                
                </Col>
                
                <Col md={4}>
                <div>
                        <img src={support} alt="" />
                        <h5>Build Quality and Design</h5>
                        <p className='text-muted'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, soluta deserunt! Rerum culpa odit id!</p>
                    </div>
                    <div>
                        <img src={support} alt="" />
                        <h5>Build Quality and Design</h5>
                        <p className='text-muted'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, soluta deserunt! Rerum culpa odit id!</p>
                    </div>
                    
                </Col>
            </Row>
        </Container>
    );
};

export default Feature;