import logo from './logo.svg'; //logoyu alıyoryz
import './App.css'; // burada css kodlarını gelmesini istiyoruz
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state={
      name:'Özge'
    }
  }
  render(){
  return (  //logonun dönmesini sağlıyor
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi {this.state.name}
        </p>
       <button>
        onClick={()=>}
       </button>
      </header>
    </div>
  );
}}

export default App;
