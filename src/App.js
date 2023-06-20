import logo from './logo.svg'; //logoyu alıyoryz
import './App.css'; // burada css kodlarını gelmesini istiyoruz
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [
      {
        name: 'linda',
      },
      {
        name: 'Frank',
      },
      {
        name: 'jackie',
      },
      {
       name: 'sengul',
    },
    ],
    };
  }
  render(){
  return (
    <div className="App">
      {this.state.monsters.map((monster) => {
      return ( 
      <div key={monster.id}>
        <h1>{monster.name}</h1>
        </div>
      ); 
      })}    
    </div> 
  );
}}

export default App;
