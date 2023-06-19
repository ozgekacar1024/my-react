import logo from './logo.svg'; //logoyu alıyoryz
import './App.css'; // burada css kodlarını gelmesini istiyoruz
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state={
      monster1:{
        name:'Linda',
      },
      monster2:{
        name:'Frank',
      },
      monster3:{
        name:'Jacky',
      },
    };
  }
  render(){
  return (  //logonun dönmesini sağlıyor
    <div className="App">
    <h1>{this.state.monster1.name}</h1>
    <h1>{this.state.monster2.name}</h1>
    <h1>{this.state.monster3.name}</h1>
    </div>
  );
}}

export default App;
