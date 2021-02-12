import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

// click = () => {
//   history.push("/testing");
// };
const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">NDTV</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/live-tv">LIVE TV</Nav.Link>
              <Nav.Link href="/latest">LATEST</Nav.Link>
              <Nav.Link href="/corona">CORONA</Nav.Link>-
              <Nav.Link href="/india">INDIA</Nav.Link>
              <Nav.Link href="/budget">BUDGET</Nav.Link>
              <Nav.Link href="/video">VIDEO</Nav.Link>
              <Nav.Link href="/opinion">OPINION</Nav.Link>
              <Nav.Link href="/world">WORLD</Nav.Link>
              <Nav.Link href="/cities">CITIES</Nav.Link>
              <Nav.Link href="/offbeat">OFFBEAT</Nav.Link>
              <Nav.Link href="/trends">TRENDS</Nav.Link>
              <Nav.Link href="/data">...</Nav.Link>
              <Nav.Link href="/https://twitter.com/">
                <i class="fab fa-twitter"></i>
              </Nav.Link>
              <Nav.Link href="/https://www.facebook.com/">
                <i class="fab fa-facebook-square"></i>
              </Nav.Link>
              <Nav.Link href="/notification">
                <i class="fas fa-bell"></i>
              </Nav.Link>
              <Nav.Link href="/search">
                <i class="fas fa-search"></i>
              </Nav.Link>
            </Nav>
                   {/* <Nav>
      <Nav.Link href="#deets"></Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
