import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const AppNavbar = () => (
  <Navbar bg="primary" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#">ShopNow</Navbar.Brand>
    </Container>
  </Navbar>
);

export default AppNavbar;
