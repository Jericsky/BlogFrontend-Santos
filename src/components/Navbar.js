import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';
import './css/Navbar.css';

export default function MyNavbar() {
  const { user } = useContext(UserContext);

  console.log(user);

  return (
    <Navbar bg="light" expand="md" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">Memoirs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-links ms-auto">
            <Nav.Item>
              <Nav.Link as={Link} to="/" className="navbar-link">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about" className="navbar-link">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/blogs" className="navbar-link">Blogs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/contact" className="navbar-link">Contact</Nav.Link>
            </Nav.Item>

            {/* Conditional rendering of Register and Login links */}
            {!user.id ? (
              <>
                <Nav.Item>
                  <Nav.Link as={Link} to="/register" className='navbar-link'>Register</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/login" className='navbar-link'>Login</Nav.Link>
                </Nav.Item>
              </>
            ) : (
              <Nav.Item>
                <Nav.Link as={Link} to="/logout" className="navbar-link">Logout</Nav.Link>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
