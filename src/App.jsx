import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [monsters, setMonsters] = useState([]); 
  const [searchField, setSearchField] = useState(''); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
        console.log("Fetched Monsters:", users); 
      });
  }, []);

  const onSearchChange = (event) => {
    console.log("Typing in SearchBox...");  
    setSearchField(event.target.value.toLowerCase()); 
  };

  useEffect(() => {
    console.log("Updated searchField:", searchField);
  }, [searchField]);

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField)
  );

  // console.log("Filtered Monsters:", filteredMonsters); 

  return (
    <div className="App">
      <h1 className="app-title">PokeDex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder="Search Monsters" />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
