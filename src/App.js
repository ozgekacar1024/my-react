import logo from './logo.svg'; //logoyu alıyoryz
import './App.css'; // burada css kodlarını gelmesini istiyoruz
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state={
      name:{firstName: 'Yihua',lastName:'Zhang'},
      company:'ZTM',
    }
  }
  render(){
  return (  //logonun dönmesini sağlıyor
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi {this.state.name.firstName}{this.state.name.lastName},I work 
          at {this.state.company}
        </p>
       <button
        onClick ={()=>{
         this.setState({name:'Anderi'})//otomatik olarak ismi güncelliyor
        }}
        >
          change name
       </button>
      </header>
    </div>
  );
}}

export default App;
