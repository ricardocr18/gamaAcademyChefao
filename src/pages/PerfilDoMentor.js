import { Component } from "react";
import '../style/PerfilDoMentor.css';
import Ellipse6 from '../img/Ellipse6.png';
import CardSlider from "../components/CardSlider";
import '../style/PerfilDoMentor.css';


class PerfilDoMentor extends Component {
    render() {

        return (

            <div className="container-fluid">

                <div className="mainfontStyle">
                    <h1>Conheça seu mentor</h1>
                    <div>
                        <img src={Ellipse6} alt="" />
                        <h2 className='nomeDoMentor'>Raquel

                            <div className="calculo">Cálculo I</div>
                            ★ ★ ★ ★ ☆
                        </h2>
                        <hr />
                        <div className='sobreMim'>
                            <h2>Sobre Mim</h2>
                        </div>
                        <p>Meu nome é Raquel e sou formada em Engenhagia Civil, com<br />
                            Mestrado em Matemática Aplicada e faço Doutorado em,<br />
                            Cálculo Estrutural. Sou apaixonada por ensinar e por ajudar<br />
                            pessoas a superar seus desafios.</p>
                        <hr />
                        <h2>Minhas Formações</h2>

                        <p>Graduada em Engenharia Civil pela UFRJ;
                            Mestra em Matemática Aplicada pela Unicamp;
                            Doutoranda em Cálculo Estrutural pela USP.</p>
                        <hr />
                        <h2>Minhas experiências</h2>
                        <p>Tenho mais de 8 anos de experiência em docência no ensino Superior, tendo ministrado aulas e workshops em universidades públicas e particulares. Atualmente sou Diretora de Obras da Construtora XPTO, coordenando uma equipe de 15 engenheiros</p>
                        <hr />
                        <h2>Minhas Redes Sociais</h2>

                    </div>
                </div>

                <hr /><hr /><a href="http://linkedin.com/in/raquel">
                    <img src="/img/linkedin.png" alt="" />http://linkedin.com/in/raquel</a>
                <hr />
                <h2>Valor da hora do mentor</h2>
                <p>R$ 60,00 a hora* <br />
                    *Somente para alunos</p>



                <div>

                    <h2>Esse profissional atende às suas necessidades?</h2>
                    <button type="button" className="btn btn-success">Agende agora</button>
                    <p>Se você for uma empresa e tem interesse em contratar os serviços
                        deste porfissional, clique no botão abaixo para falar conosco:</p>
                    <button type="button" className="btn btn-light">Sou empresa</button>
                    <h4>Quer ser um mentorando?</h4>
                    <p>Conheça alguns dos nossos mentores:</p>
                </div>

                <CardSlider />
                <button type="button" class="btn btn-success">Ser mentor</button>


            </div>



        )

    }
}

export default PerfilDoMentor;