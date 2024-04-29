import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navbar.css";
import Logo from '../../images/sources-homepage/logo/logo-white.png';

function MyNavbar() {
  return (
    <header>
      <Navbar expand="lg" className="Navbar d-flex justify-content-between align-items-center">
        <Container>
          <div className="d-flex align-items-center">
            <Navbar.Brand className="image" href="#home">
              <img src={Logo} alt="Logo"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fs-5 text-primary">
              <Nav.Link className="text-light" href="#modele">Modèle</Nav.Link>
              <Nav.Link className="text-light" href="#motorisation">Motorisation</Nav.Link>
              <Nav.Link className="text-light" href="#connexion">Connexion</Nav.Link>
              <Nav.Link className="text-light" href="#nous-trouver">Nous trouver</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default MyNavbar;
