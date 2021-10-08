import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import surface1 from "../../assets/img/surface1.png";
import './estilo.css';

class Headers extends Component {
  render() {
    return (
        
      <Navbar className="headerColor" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={surface1} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <div>
              <Nav>
                <Nav.Link className="colors" href="#deets">
                  <span>Sobre</span>
                </Nav.Link>
                <Nav.Link href="#deets">
                  <span>Mentores</span>
                </Nav.Link>
                <Nav.Link href="#deets">
                  <span>Contato</span>
                </Nav.Link>
                <Nav.Link href="#deets">
                  <span>FAQ</span>
                </Nav.Link>
                <Nav.Link href="#deets">
                  <span>Login/Cadastro</span>
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Headers;