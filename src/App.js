import { Component } from 'react';
import Headers from './components/Header';
import Banner from './components/Banner';
import Content from './components/Content';
import SobreNos from './components/SobreNos';
import Footer from './Footer';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Headers />
        <Banner />
        <Content/>
        <SobreNos/>
        <Footer />
      </div>
    );
  }
}

export default App;
