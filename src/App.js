import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Mentores from './pages/Mentores';
import TelaLoginEhCadastro from './pages/TelaLoginEhCadastro.js';

import './App.css';

function App(){
  return(
    <div className='App'>
        
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/mentores"  component={Mentores} />           
            
            <Route exact path="/loginEhCadastro" component={TelaLoginEhCadastro} />
          </Switch>        
      
    </div>
  )
}
export default App;





  /*function App() {
  return (
    <div className="App">
    <Home />         
  </div>
);
    
}

export default App; */
