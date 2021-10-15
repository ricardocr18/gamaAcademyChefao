import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../style/TelaLoginEhCadastro.css'



class Loginbtn extends Component {
  constructor() {
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

      <Link className="login__btn header-btn" to="/login" data-target="#login" onClick={(e) => this.onClicBtnkHandler(e)}>
        <p data-target="#login" className="btn__text">Login</p>
      </Link>

    );
  }
}

export default Loginbtn;
