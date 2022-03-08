import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import add from '../../../assets/images/header-add.jpg'
import head from '../../../assets/images/header-main.png';

const Header = () => {
    return (
    <Container>
        <Row className='d-flex justify-content-evenly align-items-center'>
            <Col xs={12} md={8}>
                <Row className='d-flex justify-content-evenly align-items-center'>
                    <div className='col-md-6'>
                        <h1 className='fw-bold fs-1 text-shadow'>Our Best Collection For You</h1>
                        <p className='text-muted'>Let's Explore SmartWatch and Be Smart One</p>
                        <Button variant="success" className='me-2 g-box-shadow'>Buy This Watch</Button>
                        <Button variant="outline-success" className='g-box-shadow'>Learn More...</Button>
                    </div>
                    <div className='col-md-6'>
                        <img src={head} alt="" className='rounded-3 w-100'/>
                    </div>
                </Row>
            </Col>
            <Col xs={12} md={4}>
                <img src={add} alt=""  className='rounded-3 w-100'/>
            </Col>
        </Row>
    </Container>
    );
};

export default Header;