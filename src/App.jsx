import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  return (
    <>
      <div className="App">
        <h1 className="app-title">PokeDex</h1>
        
      </div>
    </>
  );
}
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => {
//         this.setState({ monsters: users });
//       });
//   }
//   onSearchCHange = (event) => this.setState({ searchField: event.target.value });

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchCHange } = this;
//     const filteredMonsters = monsters.filter((monster) =>{
//       return monster.name.toLowerCase().includes(searchField.toLowerCase())
//     });
    
//     return (
//       <div className="App" >
//         <SearchBox onchangeHandler={onSearchCHange} placeholder="search-monsters"/>
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }

// export default App;
