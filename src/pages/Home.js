import { Component } from 'react'
import { Button, Card } from 'react-bootstrap';
import foto from '../img/banner.png';
import fotoForm from '../img/foto_form.png';
import CardSlider from '../components/CardSlider'
import '../style/Home.css';
 

class Home extends Component {
    render(){
        return( 
            <div className="Home">
            

                <div>
                    <Card className="banner">
                        <Card.Img className='bannerFoto' src={foto} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title className='bannerTitulo'>                       
                            <p>Conectamos você com as melhores soluções técnicas</p>                                             
                            </Card.Title>                        
                            <input 
                                type="text"
                                placeholder="Busque sua especialidade"
                                className="form-cadastro_input"
                            //onChange={this._handleMudancaTitulo.bind(this)}
                            />                        
                        </Card.ImgOverlay>
                    </Card>
                </div>

               <div className='contentAjudar'>
                    <h2>Estamos aqui para ajudar você neste momento</h2>
                    <h3>Seja você um mentor, um aluno ou uma empresa, temos a solução perfeita para você!</h3>
                    <Button className='bot' variant="primary">Seu mentor</Button>{' '}
                    <Button variant="success">Sou aluno</Button>{' '}
                    <Button variant="light">Sou empresa</Button>{' '}

                    <div className='contentMentorando'>
                        <h2>Quem é a Mentorando?</h2>
                        <h3>Nós rmpeos a barreira do conhecimento! Conectamos problemas reais aos melhores e mais especializados mentores capazes de transformar realizades e negócios</h3>
                        <Button variant="success">Me cadastrar</Button>{' '}
                    </div>

                    


                </div>

              {/* Quadrado de Aviso */}

                {/* <div className="row"> */}
            {/* <div className="col-xs-4"> */}
              {/* <div className="indicaAmigo"> */}

              <div id="about-form">
          <div class="container">
            <div class="row">
              <div class="col-12">   
              <div className="quadrado">
                  <h2>Indique e ganhe</h2>
                  <h5>
                    Indique e ganhe A cada indicação que se cadastrar
                    <span> aqui</span> na Mentorando, ganhe um bônus/desconto de
                    10% do valor da sua próxima mentoria
                  </h5>
                </div>
              </div>
              </div>
              </div>
              </div>

              {/* </div>
            </div>
          </div> */}

            <CardSlider />


        {/* <!-- Formulário --> */}
        <div id="about-form">
          <div class="container">
            <div class="row">
              <div class="col-12">
                
              </div>
              <div class="col-md-6">
                <img class="img-fluid" src={fotoForm} alt="VemConsig"/>
              </div>
              <div class="col-md-6">

                <form class="row g-3" action="enviar.php" method="POST">
                  <h5>Fale Conosco.</h5>
                  <div class="col-md-12">
                    <label for="validationDefault01" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="validationDefault01" name="nome" placeholder="Qual o seu Nome"  required/>
                  </div>
                  <div class="col-md-6">
                    <label for="validationDefault02" class="form-label">E-mail</label>
                    <input type="text" class="form-control" id="validationDefault02" name="telefone" placeholder="Qual o seu e-mail" required/>
                  </div>

                  
                  <div class="col-12">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" name="concorda" value="" id="invalidCheck2" required/>
                      <label class="form-check-label" for="invalidCheck2">
                        Concordo em enviar meus dados para analise
                      </label>
                    </div>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-primary" name="enviarFormulario" type="submit">Enviar</button>
                  </div>                 

                </form>
              </div>
            </div>
          </div>
        </div>


           
               
        </div>                                      
        );
    }
}

export default Home;