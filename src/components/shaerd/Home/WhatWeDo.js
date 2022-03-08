import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import support from '../../../assets/images/24-hours-support.png';
import payment from '../../../assets/images/security.png';
import truck from '../../../assets/images/truck.png';

const WhatWeDo = () => {
    return (
        <Container className=' bg-success rounded-3 my-5'>
            <Row className=''>
                <Col md={4} sm={12} className='d-flex justify-content-center align-items-center py-4'>
                    <img src={truck} alt="" className='bg-light p-2 rounded-circle me-4'/>
                    <div>
                        <h4 className='p-0 m-0 text-light'>Free Shipping</h4>
                        <p className='p-0 m-0 text-light'>Free Shipping On Order</p>
                    </div>
                </Col>
                <Col md={4} sm={12} className='d-flex justify-content-center align-items-center py-4'>
                    <img src={support} alt="" className='bg-light p-2 rounded-circle me-4'/>
                    <div>
                        <h4 className='p-0 m-0 text-light'>Free Shipping</h4>
                        <p className='p-0 m-0 text-light'>Free Shipping On Order</p>
                    </div>
                </Col>
                <Col md={4} sm={12} className='d-flex justify-content-center align-items-center py-4'>
                    <img src={payment} alt="" className='bg-light p-2 rounded-circle me-4'/>
                    <div>
                        <h4 className='p-0 m-0 text-light'>Free Shipping</h4>
                        <p className='p-0 m-0 text-light'>Free Shipping On Order</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default WhatWeDo;