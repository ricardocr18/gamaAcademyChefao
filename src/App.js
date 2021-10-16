import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Mentores from './pages/Mentores';
import Header from './components/Header';
import Footer from './components/Footer';
import TelaLoginEhCadastro from './pages/TelaLoginEhCadastro';
import Login from './components/Login';
import './style/TelaLoginEhCadastro.css';
import PerfilDoMentor from './pages/PerfilDoMentor';

function App(){
  return(
    <div className='App'>
        <Header />
          <Switch>
            <Route exact path="/chefao" component={Home} />
            
            <Route exact path="/mentores"  component={Mentores} />
            <Route exact path="/perfil"  component={PerfilDoMentor} />
            {/* <Route exact path="/loginEhCadastro" component={TelaLoginEhCadastro} /> */}
          </Switch> 

      <main>
        <div className="content__container">
            <div className="buttons_container">
            {/* <Cadastrobtn />
            <Loginbtn />               */}
            </div>                   
            <div className="pagination__container">
              <Route exact path="/cadastro" component={ TelaLoginEhCadastro } />
              <Route exact path="/login" component={ Login } />              
            </div>          
        </div>
      </main>       
      <Footer />
    </div>
  )
}
export default App;

