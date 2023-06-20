import logo from './logo.svg'; //logoyu alıyoryz
import './App.css'; // burada css kodlarını gelmesini istiyoruz
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state={
    monsters:[
      {
        name:'Linda',
        id:'12e1231e'
      },
      {
        name:'Frank',
        id:'12ed2dacas'
      },
      {
        name:'Jacky',
        id:'1231e'
      },
      {
        name:'Anderi',
        id:'12e1e213'
      },
    ]
    };
  }
  render(){
  return (  //logonun dönmesini sağlıyor
    <div className="App">
    {this.state.monsters.map((monster) => { 
      return <div 
      key={monster.id}><h1></h1>{monster.name}
      </div>
    })}
    </div>
  );
}}

export default App;
