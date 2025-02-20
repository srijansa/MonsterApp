import { Component } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


class App extends Component{
  constructor(){
    super();
    this.state = {
      monster : [],
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((users)=>
      this.setState(()=>{
        return {monster: users};
      },
      ()=>{
        console.log(this.state);
      }
    )
  );
  }
  render() {
    return (
      <>
       <div className="App">
        {this.state.monster.map((monster)=>{
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
       </div>
      </>
    )
  }
}

export default App
