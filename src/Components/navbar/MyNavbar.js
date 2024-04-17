import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navbar.css";
import Logo from '../../images/sources-homepage/logo/logo-white.png';


function MyNavbar() {
  return (
    <header>
      <Navbar expand="lg" className="Navbar d-flex justify-content-around">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="fs-5">
              <Nav.Link href="#home">Modèle</Nav.Link>
              <Nav.Link href="#link">Motorisation</Nav.Link>
              <Nav.Link href="#link">Connexion</Nav.Link>
              <Nav.Link href="#link">Nous trouver</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default MyNavbar;
