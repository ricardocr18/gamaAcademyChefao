import '../App'

import React from 'react';
import Cadastro from '../components/Cadastro.js';
import Cadastrobtn from '../components/CadastroBtn';
import Loginbtn from '../components/LoginBtn';


import '../style/TelaLoginEhCadastro.css';


function TelaLoginEhCadastro() {
  return (
    
    <div className='TelaLoginEhCadastro'>
     <main>
       <div className="content__container">
         <div className="buttons_container">
            <Cadastrobtn />
            <Loginbtn />
         </div>                   
            <div className="pagination__container"> 

            <Cadastro />
            {/* <Route exact path="/cadastro" component={ Cadastro } /> */}
            {/* <Route exact path="/login" component={ Login } />            */}
              
            </div>          
       </div>
     </main>

     </div>    

  );
}
 export default TelaLoginEhCadastro;
