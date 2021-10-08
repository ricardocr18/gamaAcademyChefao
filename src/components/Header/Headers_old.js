import React, {Component} from "react";
import { Navbar, Container, Nav} from 'react-bootstrap';
import './estilo.css';

class Headers extends Component{
    render(){
        return(            
            <Navbar className='headerColor' collapseOnSelect expand="lg" >
            <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav >
                <Nav.Link href="#deets">Sobre</Nav.Link>
                <Nav.Link href="#deets">Mentores</Nav.Link>
                <Nav.Link href="#deets">Contato</Nav.Link>
                <Nav.Link href="#deets">FAQ</Nav.Link>
                <Nav.Link href="#deets">Login/Cadastro</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>            
        )
    }
}

export default Headers;