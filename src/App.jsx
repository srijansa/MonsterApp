import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState({ monsters: users });
      });
  }
  onSearchCHange = (event) => this.setState({ searchField: event.target.value });

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchCHange } = this;
    const filteredMonsters = monsters.filter((monster) =>{
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    });
    
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search-monsters"
          onChange={onSearchCHange}
        />
        {/* {filteredMonsters.map((monster) => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))} */}
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
