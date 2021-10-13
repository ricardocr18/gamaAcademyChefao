import CardSlider from "../components/CardSlider"
import CardMentores from "../components/CardMentores";
import CardMentoresMaisRecomendados from '../components/CardMentoresMaisRecomendados'
import { Component } from 'react';

import '../style/Mentores.css'

class Mentores extends Component {

  render (){
    return (
      <div className="Mentores">
      
        <div class="container">
          <h1 class="font-weight-bold pt-5">Vamos encontrar seu mentor ideal</h1>
          <div className="row">
            <div className="col-xs-4">
              <div class="search mt-5">
                <i class="fa fa-search"></i>
                <div className="tamanho">
                  <input
                    type="text-center"
                    class="form-control"
                    placeholder="Busque sua especialidade"
                  />
                </div>
                <h2 className="pt-5 pb-4">Especialidades mais procuradas</h2>
              </div>
            </div>
          </div>              
        </div>
        <CardSlider />
        <CardMentores/>
        <CardMentoresMaisRecomendados/>
        
      </div>      
     )
     
  }
  
}

export default Mentores;