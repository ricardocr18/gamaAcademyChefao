import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';



 function App(){
  return(
    <div className='App'>
        <BrowserRouter>
        <Switch>
          <Route patch='/' exact component={Home} />
          </Switch>
        </BrowserRouter>
      
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
