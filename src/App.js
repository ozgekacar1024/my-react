import logo from './logo.svg'; //logoyu alıyoryz
import './App.css'; // burada css kodlarını gelmesini istiyoruz
import { Component } from 'react';

class App extends Component {
  render(){
  return (  //logonun dönmesini sağlıyor
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi yihua
        </p>
       <button>
        Chanege Name
       </button>
      </header>
    </div>
  );
}}

export default App;
