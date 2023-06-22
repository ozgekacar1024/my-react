import logo from './logo.svg'; //logoyu alıyoryz
import './App.css'; // burada css kodlarını gelmesini istiyoruz
import { Component } from 'react';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

class App extends Component { 
  constructor(){
    super();
    this.state={
    monsters:[],
    }; 
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((Response) => Response.json())
      //.then((users)=>console.log(users))//kullanıcıların geri çağrımızın argümanı olarak console da aktarılır
      .then((users)=>
      this.setState(()=>{
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
    //render html gibi ne gösterileceğini belirler
  return (  //logonun dönmesini sağlıyor
    <div className="App">
      <input 
      className='search-box' 
      type='search' 
      placeholder='search monsters' 
      onChange={(event)=>{
       // console.log(event);
        
        const searchString= event.target.value.toLocaleLowerCase();//dizlerin hepsını küçük harfe dönüştütür 
        const filteredMonsters= this.state.monsters.filter((monster)=>{
        //return monster.name.toLocaleLowerCase.includes(event.target.value);//bu haliyle küçük büyük harfe duyarllı değil
        return monster.name.toLocaleLowerCase().includes(searchString);
        //canavarın arama dizesini içeriyorsa true değerini föndürüyor
         //eğer içermiyorsa ondan kurtul
        });

          this.setState(()=> { 
           return {monsters:filteredMonsters};//bu şekilde filtrelediğimiz dizi yeni dizi olarak kalıyor kendi dizimizi geri tutmak için 
          }, ()=> {
            console.log({endingArray: this.state.monsters});
          });
      }}
      /> 
    {this.state.monsters.map((monster) => { 
      return (
      <div key={monster.id}>
        <h1> {monster.name} </h1>
      </div>
      );
    })}
    <button>

    </button>
    </div>
  );
}
}
 
export default App;
