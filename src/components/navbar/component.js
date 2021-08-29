import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

import './index.scss';

const Component = () => {
  return (
    <Navbar expand='lg'>
      <Container>
        <Navbar.Brand href='/'>MD</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Link to='/'>Home</Link>
            <Link to='/skills'>Skills</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/contact'>Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

Component.displayName = 'Navbar';

export default Component;
