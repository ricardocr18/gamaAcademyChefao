import React, { Component } from "react";
import { Card } from 'react-bootstrap';
import foto from '../../assets/img/banner.png';
import "./estilo.css";


class Banner extends Component {
    render() {
        return (
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

        )
    }
}

export default Banner;