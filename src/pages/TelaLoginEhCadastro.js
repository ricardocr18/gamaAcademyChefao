import React from 'react';
import { Route } from 'react-router-dom';
import Cadastro from '../components/Cadastro.js';
import Cadastrobtn from '../components/CadastroBtn';
import Loginbtn from '../components/LoginBtn';
import Login from '../components/Login.js';
import Header from '../components/Header.js';
import '../style/TelaLoginEhCadastro.css';

function TelaLoginEhCadastro() {
  return (
    <div className="App">
      <Header/>
     <main>
       <div className="content__container">
         <div className="buttons_container">
            <Cadastrobtn />
            <Loginbtn />
         </div>                   
            <div className="pagination__container">
              
            <Route exact path="/cadastro" component={ Cadastro } />
            <Route exact path="/login" component={ Login } />             
              
            </div>          
       </div>
     </main>
    </div>
  );
}

export default TelaLoginEhCadastro;



// import React from 'react';
// import { Component } from 'react';
// import Header from '../components/Header.js';

// class TelaDeCadastroEhLogin extends Component {
//     render(){
//         return(
            
//             <div>
//             <Header/>
//             <h3>Olá mundo</h3>
//             </div>
//         )

//     }
// }
// export default TelaDeCadastroEhLogin;