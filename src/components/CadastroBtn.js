import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Cadastrobtn extends Component {
  constructor(){
    super();
    this.onClicBtnkHandler = this.onClicBtnkHandler.bind(this);
  }

  onClicBtnkHandler(e) {
    const getBtns = document.querySelectorAll('[data-target]')
    getBtns.forEach(item => {
      item.classList.remove('header-btn-active');
    })
    e.target.classList.add('header-btn-active');
    e.target.parentNode.classList.add('header-btn-active');
  }

  render() {
    return (
        <Link className="login__btn header-btn header-btn-active" to="/cadastro" data-target="#cadastro" onClick={ (e) => this.onClicBtnkHandler(e) }>         
          <p data-target="#login" className="btn__text">Cadastro</p>       
        </Link>
    );
  }
}

export default Cadastrobtn;
