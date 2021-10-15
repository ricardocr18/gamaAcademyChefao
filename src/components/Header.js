import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import surface1 from '../img/surface1.png';
import '../style/Header.css';
import { useHistory } from 'react-router-dom'

function Header() {

  const history = useHistory();
   function mentoresBtn() {
     history.push("/mentores");
     window.location.reload();
   }
  
   function homeBtn() {
     history.push("/");
     window.location.reload();
   }

   function LoginEhCadastroBtn() {
    history.push("/cadastro");
    window.location.reload();
  }
  
   
    return (
        
      <Navbar className="headerColor" collapseOnSelect expand="lg">
        <Container>

          <Navbar.Brand >
            <img onClick={() => homeBtn()} src={surface1} alt="" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <div>
              <Nav>
                <Nav.Link className="colors" href="/#ajuda">
                  <span>Sobre</span>
                </Nav.Link>

                <Nav.Link>
                  <span onClick={() => mentoresBtn()}>Mentores</span>
                </Nav.Link> 
                
                <Nav.Link href="#deets">
                  <span>Contato</span>
                </Nav.Link>
                <Nav.Link href="#deets">
                  <span>FAQ</span>
                </Nav.Link>

                <Nav.Link href="#deets">
                  <span onClick={() => LoginEhCadastroBtn()}>Login/Cadastro</span>
                </Nav.Link>

              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
export default Header;