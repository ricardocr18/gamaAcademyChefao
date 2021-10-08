import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import "./estilo.css"


class Content extends Component {
    render() {
        return (
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
        )
    }
}

export default Content;