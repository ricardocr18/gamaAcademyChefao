import React, { Component } from 'react';

import Cadastrobtn from './CadastroBtn';
import Loginbtn from './LoginBtn';

import '../style/TelaLoginEhCadastro.css';


class Login extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
    }

    this.logarClickHandlier = this.logarClickHandlier.bind(this);
    this.inputOnchageCntroller = this.inputOnchageController.bind(this)
  }



  inputOnchageController(e) {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  logarClickHandlier() {
    const { senha, email } = this.state
    if (JSON.parse(localStorage.users).some((item) => item.email === email)) {
      const recoverUser = JSON.parse(localStorage.users).find((item) => item.email === email);
      if (recoverUser.senha === senha) {
        window.alert(`usuário: ${recoverUser.nome} logado com o email: ${recoverUser.email}`)
      } else { window.alert('senha inválida') }
    } else { window.alert('usuário não cadastrado') }
  }

  render() {
    return (

      <div className="cadastro__container">

        <div className="buttons_container">
          <Cadastrobtn />
          <Loginbtn />
        </div>

        <h2 className="cadastro__title">Login</h2>
        <form className="form__container_login">
          <div className="form-content email__input">
            <input
              id="email"
              type="email"
              placeholder="Digite um email..."
              onChange={e => this.inputOnchageCntroller(e)}
            />
          </div>
          <div className="form-content senha__input">
            <input
              id="senha"
              type="password"
              placeholder="Digite uma senha..."
              onChange={e => this.inputOnchageCntroller(e)}
            />
          </div>
        </form>
        <span
          className="custom__button"
          onClick={() => this.logarClickHandlier()}
        >
          Logar
        </span>
      </div>
    );
  }
}

export default Login;
