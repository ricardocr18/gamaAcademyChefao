import { Component } from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import foto from '../img/banner.png';
import fotoForm from '../img/foto_form.png';
import CardSliderTextoHome from '../components/CardSliderTextoHome'
import '../style/Home.css';



class Home extends Component {
  render() {
    return (
      <div className="Home">


        <div>
          <Card className="banner">
            <Card.Img className='bannerFoto' src={foto} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className='bannerTitulo'>
                <p>Conectamos você com as melhores soluções técnicas</p>
              </Card.Title>

              <div className="container">
                <div className="row">
                  <div className="col-12">

                    <div className="tamanho">
                      <div class="search mt-5">
                        <i class="fa fa-search"></i>

                        <input className='tamanhoInput'
                          type="text-center"
                          class="form-control"
                          placeholder="Busque sua especialidade"
                        />
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </Card.ImgOverlay>
          </Card>
        </div>

        <div className='contentAjudar'>

          <div id='ajuda'>
            <h2>Estamos aqui para ajudar você neste momento</h2>
          </div>
          <div className='subTexto'>
            <h3>Seja você um mentor, um aluno ou uma<br /> empresa, temos a solução perfeita para você!</h3>
          </div>
          <div className='buttonsAjuda'>
            <Button className='bot' variant="primary" >Seu mentor</Button>{' '}
            <Button variant="success">Sou aluno</Button>{' '}
            <Button variant="light">Sou empresa</Button>{' '}
          </div>

          <div className='contentMentorando'>
            <h2>Quem é a Mentorando?</h2>
            <div className='subTexto'>
              <h3>Nós rompemos a barreira do conhecimento!<br /> Conectamos problemas reais aos melhores e mais especializados<br /> mentores capazes de transformar realizades e negócios</h3>
            </div>
            <Button className='buttonMentorando' variant="success">Me cadastrar</Button>{' '}
          </div>

        </div>
        <div id="about-form">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="quadrado">
                  <h2>Indique e ganhe</h2>
                  <h5>
                    Indique e ganhe A cada indicação que se cadastrar
                    <a target="_blank" href={'https://forms.gle/LGppMRKybmeySj7D8'}>
                    <span> aqui</span> </a> na Mentorando, ganhe um bônus/desconto de
                    10% do valor da sua próxima mentoria
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CardSliderTextoHome />

        {/* <!-- Formulário --> */}
        <div id="about-form">
          <div class="container">
            <div class="row">
              <div class="col-12">

              </div>
              <div class="col-md-6">
                <img class="img-fluid" src={fotoForm} alt="VemConsig" />
              </div>
              <div class="col-md-6">

                <form className='formHome' class="row g-3" action="enviar.php" method="POST">
                  <h5>Fale Conosco.</h5>
                  <div class="col-md-12">
                    <label for="validationDefault01" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="validationDefault01" name="nome" placeholder="Qual o seu Nome" required />
                  </div>
                  <div class="col-md-6">
                    <label for="validationDefault02" class="form-label">E-mail</label>
                    <input type="text" class="form-control" id="validationDefault02" name="telefone" placeholder="Qual o seu e-mail" required />
                  </div>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Digite a sua Mensagem aqui" />
                  </Form.Group>

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