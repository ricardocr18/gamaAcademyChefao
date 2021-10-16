import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import surface1 from '../img/surface1.png';
import '../style/Header.css';
import { useHistory } from 'react-router-dom';

function Header() {

  const history = useHistory('/mentores', "/cadastro");

  //  function mentoresBtn() {
  //    history.push("/mentores");
  //    window.location.reload();
  //  }
  
   function homeBtn() {
     history.push("/chefao");
     window.location.reload();
   }

  
  //  function LoginEhCadastroBtn("/cadastro") {
  //   history.push("/cadastro");
  //   window.location.reload();
  // }
  
   
    return (
        
      <Navbar className="headerColor" collapseOnSelect expand="lg">
        <Container>

          <Navbar.Brand >
            <img  className="logo" onClick={() => homeBtn()} src={surface1} alt="" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <div>
              <Nav>
                <Nav.Link className="colors" href="#ajuda">
                Sobre                  
                </Nav.Link>

                <Nav.Link>
                  <span onClick={() => history.push('/mentores')}>Mentores</span>
                </Nav.Link> 
                
                <Nav.Link href="#faleConosco">
                  <span>Contato</span>
                </Nav.Link>

                <Nav.Link href="#deets">
                  <span>FAQ</span>
                </Nav.Link>

                <Nav.Link href="#deets">
                  <span onClick={() => history.push('/cadastro')}>Login/Cadastro</span>
                </Nav.Link>

              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
export default Header;