import { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import foto from '../img/banner.png';
import '../style/Home.css';
import CardSlider from '../components/CardSlider';
import CardMentores from '../components/CardMentores';
import CardMentoresMaisRecomendados from '../components/CardMentoresMaisRecomendados';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div class="container-fluid">
          <div className="row">
            <div className="col-xs-4">
              <div class="search mt-5">
                <Card className="banner">
                  <Card.Img
                    className="bannerFoto"
                    src={foto}
                    alt="Card image"
                  />
                  <Card.ImgOverlay>
                    <Card.Title className="bannerTitulo">
                      <p>Conectamos você com as melhores soluções técnicas</p>
                    </Card.Title>
                    <div className="tamanho">
                      <div class="search mt-5">
                        <i class="fa fa-search"></i>

                        <input
                          type="text-center"
                          class="form-control"
                          placeholder="Busque sua especialidade"
                        />
                      </div>
                    </div>
                  </Card.ImgOverlay>
                </Card>
              </div>
            </div>
          </div>
          <div className="contentAjudar">
            <h2>Estamos aqui para ajudar você neste momento</h2>
            <h3>
              Seja você um mentor, um aluno ou uma empresa, temos a solução
              perfeita para você!
            </h3>
            <Button className="bot" variant="primary">
              Seu mentor
            </Button>{' '}
            <Button variant="success" className="bot">
              Sou aluno
            </Button>{' '}
            <Button variant="light" className="bot">
              Sou empresa
            </Button>{' '}
            <div className="contentMentorando">
              <h2>Quem é a Mentorando?</h2>
              <h3>
                Nós rompemos a barreira do conhecimento! Conectamos problemas
                reais aos melhores e mais especializados mentores capazes de
                transformar realizades e negócios
              </h3>
              <Button variant="success" className="bot">
                Me cadastrar
              </Button>{' '}
            </div>
          </div>
          <div className="row">
            <div className="col-xs-4">
              <div className="indicaAmigo">
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
          <div className="row">
            <div className="col-xs-4">
              <div className="pesquisas">
                <div className="pesquisa">
                  <h1 class="font-weight-bold pt-5">O que dizem sobre nós</h1>
                  <CardSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;