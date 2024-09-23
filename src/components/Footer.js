import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './css/Footer.css'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>About Us</h5>
            <p>
              Welcome to our blog where we share insightful articles on
              technology, trends, and more. Stay informed and inspired.
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Home</a></li>
              <li><a href="/about" className="text-light">About</a></li>
              <li><a href="/contact" className="text-light">Contact</a></li>
              <li><a href="/privacy-policy" className="text-light">Privacy Policy</a></li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Contact Us</h5>
            <p>
              Email: <a href="mailto:memoirss@mail.com" className="text-light">memoirs@mail.com</a>
            </p>
            <p>
              Phone: <a href="tel:+123456789" className="text-light">09123456789</a>
            </p>
            <div>
              <a href="https://facebook.com" className="text-light me-2">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com" className="text-light me-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="text-light">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col>
            <p className="mb-0">&copy; 2024 Your Blog Name. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
