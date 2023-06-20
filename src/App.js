import logo from './logo.svg'; //logoyu alıyoryz
import './App.css'; // burada css kodlarını gelmesini istiyoruz
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state={
    monsters:[
      
    ],
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((Response) => Response.json())
      //.then((users)=>console.log(users))//kullanıcıların geri çağrımızın argümanı olarak console da aktarılır
      .then((users)=>this.state(()=>{
        return{monsters:users}
        ////monsterin kullanıcıları işaret ettiği nesneyi geri döndürecek
      },
      () => {
        console.log(this.state); 
        //monsterları isimlerini arayüzde gözteriyor console da diğer özelliklerini
      }
      
      ));
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
