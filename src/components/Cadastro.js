import React, { Component } from 'react';

const timeOut = 300;
let radioOption = 'Mentor';
let nomeOk = false;
let emailOk = false;
let senhaOk = false;
let senha2Ok = false;
let cpfOk = false;

class Cadastro extends Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
      senha: '',
      senha_confirm: '',
      cpf: '',
    }

    this.modalInputError = this.modalInputError.bind(this);
    this.inputOnchangeController = this.inputOnchangeController.bind(this);
    this.radioOptionClickHandler = this.radioOptionClickHandler.bind(this);
    this.cadastrarClickHandler = this.cadastrarClickHandler.bind(this);

  }

  componentDidMount() {
    const getBtn = document.querySelector('.custom__button');
    getBtn.style.visibility = 'hidden';
  }

  modalCloseHandler() {
    setTimeout(() => {
      const getModal = document.querySelector('.modal__error');
      getModal.classList.add('modal__close');
      const getBtn = document.querySelector('.custom__button');
      getBtn.style.visibility = 'visible';
    }, timeOut)
  }

  modalInputError(input__error) {
    return (

      <div className="modal__error">

        <span className="modal__error-title">Alerta!!!</span>
        {
          input__error === 'senha-cadastro' ? (
            <span className="modal__span">Senha precisa ter no mínimo 6 caracteres!</span>)
            : ''
        }
        {
          input__error === 'senha' ? (
            <span className="modal__span">Senha de usuário incorreta!</span>)
            : ''
        }
        {
          input__error === 'senha-confirm' ? (
            <span className="modal__span">Senha de confirmação não condiz com a senha escolhida!</span>)
            : ''
        }
        {
          input__error === 'usuario-ja-cadastrado' ? (
            <span className="modal__span">'Email já cadastrado!'</span>)
            : ''
        }
        <i className="uil uil-times modal-icon" onClick={() => this.modalCloseHandler()}></i>
      </div>
    );
  }

  radioOptionClickHandler(e) {
    radioOption = e.target.value;
  }

  cadastrarClickHandler() {
    let auxArray = [];

    const user = {
      ...this.state,
      perfil: radioOption,
    }

    if (!localStorage.users) {
      localStorage.users = JSON.stringify([user]);
    } else if (localStorage.users) {
      const recoverUsers = JSON.parse(localStorage.users);
      if (recoverUsers.some((item) => item.email === user.email)) {
        return window.alert('Email já Cadastrado');
      }
      auxArray = [...recoverUsers, user];
      localStorage.users = JSON.stringify(auxArray);
      window.alert(`Usuario: ${user.nome} Cadastrado com sucesso!`);
    }
    const getForm = document.querySelector('.form__container');
    getForm.reset();
  }


  inputOnchangeController(e) {
    this.setState({
      [e.target.id]: e.target.value,
    }, () => {
      const email = document.querySelector('#email');
      const password = document.querySelector('#senha');
      const password2 = document.querySelector('#senha_confirm');
      const nome = document.querySelector('#nome');
      const cpf = document.querySelector('#cpf');
      const getBtn = document.querySelector('.custom__button');
      const getSpanNome = document.querySelector('.span__nome-checked');
      const getSpanEmail = document.querySelector('.span__email-checked');
      const getSpanSenha = document.querySelector('.span__senha-checked');
      const getSpanSenha2 = document.querySelector('.span__senha-confirm-checked');
      const getSpanCpf = document.querySelector('.span__cpf-checked');


      if (e.target.id === 'nome' && nome.value.length >= 3) {
        nomeOk = true;
        getSpanNome.innerHTML = '<i class="uil uil-check checked-ok"></i>';
      } else if (e.target.id === 'nome' && nome.value.length < 3) {
        nomeOk = false;
        getSpanNome.innerHTML = '<i class="uil uil-times checked-error"></i>';
        getBtn.style.visibility = 'hidden';
      }
      if (e.target.id === 'email' && email.checkValidity() && email.value.length >= 1) {
        emailOk = true;
        getSpanEmail.innerHTML = '<i class="uil uil-check checked-ok"></i>';
      } else if ((e.target.id === 'email' && !email.checkValidity()) || email.value.length < 1) {
        emailOk = false;
        <i class="uil uil-times"></i>
        getSpanEmail.innerHTML = '<i class="uil uil-times checked-error"></i>';
        getBtn.style.visibility = 'hidden';
      }
      if (e.target.id === 'senha' && password.value.length >= 6) {
        senhaOk = true;
        getSpanSenha.innerHTML = '<i class="uil uil-check checked-ok"></i>';
      } else if (e.target.id === 'senha' && password.value.length < 6) {
        senhaOk = false;
        getSpanSenha.innerHTML = '<i class="uil uil-times checked-error"></i>';
        getBtn.style.visibility = 'hidden';
      }
      if (e.target.id === 'senha_confirm' && password.value.length >= 6 && password.value === password2.value) {
        senha2Ok = true;
        getSpanSenha2.innerHTML = '<i class="uil uil-check checked-ok"></i>';
      } else if (e.target.id === 'senha_confirm' && password.value.length < 6 || password.value !== password2.value) {
        senha2Ok = false;
        getSpanSenha2.innerHTML = '<i class="uil uil-times checked-error"></i>';
        getBtn.style.visibility = 'hidden';
      }
      if (e.target.id === 'cpf' && cpf.value.length === 11) {
        cpfOk = true;
        getSpanCpf.innerHTML = '<i class="uil uil-check checked-ok"></i>';
      } else if (e.target.id === 'cpf' && cpf.value.length < 11) {
        cpfOk = false;
        getSpanCpf.innerHTML = '<i class="uil uil-times checked-error"></i>';
      }
      if (nomeOk && emailOk && senhaOk && senha2Ok && cpfOk) {
        getBtn.style.visibility = 'visible';
      }
    })
  }


  render() {
    return (

      <div className="cadastro__container">

        <h2 lassName="cadastro__title">Cadastro</h2>
        <form className="form__container">
          <div className="form-content name__input">
            <input
              id='nome'
              type="text"
              placeholder="Nome (Maior que 3 caracteres.)"
              onChange={e => this.inputOnchangeController(e)}
            />
            <span className="span__nome-checked" />
          </div>
          <div className="form-content email__input">
            <input
              id='email'
              type="email"
              placeholder="Email (Ex: teste@teste.com)"
              onChange={e => this.inputOnchangeController(e)}
            />
            <span className="span__email-checked" />
          </div>
          <div className="form-content senha__input">
            <input
              id="senha"
              type="password"
              placeholder="Senha (Maior que 6 caracteres.)"
              onChange={e => this.inputOnchangeController(e)}
            />
            <span className="span__senha-checked" />
          </div>
          <div className="form-content senha__input-confirm">
            <input
              id="senha_confirm"
              type="password"
              placeholder="Confirme sua senha"
              onChange={e => this.inputOnchangeController(e)}
            />
            <span className="span__senha-confirm-checked" />
          </div>
          <div className="form-content cpf__input">
            <input
              id="cpf"
              type="text"
              placeholder="Cpf/Cnpj (11 dígitos sem pontos.)"
              onChange={e => this.inputOnchangeController(e)}
            />
            <span className="span__cpf-checked" />
          </div>
          <div className="radio-input">
            <label htmlFor="Mentor">
              <span className="radio__span">Mentor:</span>
              <input
                defaultChecked
                type="radio"
                id="Mentor"
                name="perfil"
                value="Mentor"
                onClick={(e) => this.radioOptionClickHandler(e)}
              />
            </label>
          </div>
          <div className="radio-input">
            <label htmlFor="Aluno">
              <span className="radio__span">Aluno:</span>
              <input
                type="radio"
                id="Aluno"
                name="perfil"
                value="Aluno"
                onClick={(e) => this.radioOptionClickHandler(e)}
              />
            </label>
          </div>
          <div className="radio-input">
            <label htmlFor="Empresa">
              <span className="radio__span">Empresa:</span>
              <input
                type="radio"
                id="Empresa"
                name="perfil"
                value="Empresa"
                onClick={(e) => this.radioOptionClickHandler(e)}
              />
            </label>
          </div>
        </form>
        <span
          className="custom__button"
          onClick={() => this.cadastrarClickHandler()}
        >
          Cadastrar

        </span>
      </div>
    );
  }
}

export default Cadastro;