import React from "react";
import link from '../Assets/images/linkedIn.png';
import gh from '../Assets/images/github.png';
import twit from '../Assets/images/twitter.png';


function Footer() {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    );
}

export default Footer;

