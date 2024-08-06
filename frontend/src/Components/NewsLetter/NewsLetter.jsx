import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <Container className="newsletter my-5">
      <Row className="text-center mb-4">
        <Col>
          <h1>Get Exclusive Offers On Your Email</h1>
          <p>Subscribe To our NewsLetter and get updated</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <div className="newsletter-form">
            <Form.Control
              type="email"
              placeholder="Enter your email id"
              className="newsletter-input"
            />
            <Button variant="dark" type="submit" className="newsletter-button">
              Subscribe
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsLetter;
