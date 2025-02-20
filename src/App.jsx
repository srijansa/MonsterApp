import { Component } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


class App extends Component{
  constructor(){
    super();
    this.state = {
      name : { firstName:'Srijan', lastName:''},
      monsters : [
        {
          name : 'Linda',
          id : 1,
        },
        {
          name : 'Frank',
          id : 2,
        },
        {
          name : 'Jacky',
          id : 3,
        },
        {
          name : 'Andrei',
          id : 4,
        },
      ],
    };
  }
  componentDidMount() {
    fetech('https://jsonplaceholder.typicode.com/users').then((response)=> response.json()).then((users)=>console.log(users));   
  }
  render() {
    return (
      <>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Hi {this.state.name.firstName +" "+this.state.name.lastName}</h1>
        <div className='App'>
          {
          this.state.monsters.map((monster)=>{
            return <h1>{monster.name}</h1>
          })
          }
        </div>
        {/* What is shallow merge? React changes when the state of the object changes */}
        <button onClick={() => {
          this.setState(
            () =>{
              return {
                name : {firstName:'Srijan', lastName:'Sareen'},
              };
            },
            () => {
              console.log(this.state)
            }
          );
        }}></button>
        <div className="card">
          {/* <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button> */}
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    )
  }
}

export default App
