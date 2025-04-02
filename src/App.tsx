import { useState, useEffect, ChangeEvent } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { getData } from './data.utils';
import React from 'react';
export type Monsters = {
  id: string;
  name: string;
  email: string;
}
const App = () => {
  const [monsters, setMonsters] = useState<Monsters[]>([]); 
  const [searchField, setSearchField] = useState(''); 
  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((response) => response.json())
    //   .then((users) => {
    //     setMonsters(users);
    //     console.log("Fetched Monsters:", users); 
    //   });
    const fetchUsers = async () =>{
      const users = await getData<Monsters[]>('https://jsonplaceholder.typicode.com/users'); 
      setMonsters(users);
    }
    fetchUsers();
    
  }, []);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchField(event.target.value.toLowerCase());
  };

  const filteredMonsters = monsters.filter((monster: Monsters) =>
    monster.name.toLowerCase().includes(searchField)
  );

  // useEffect(() => {
  //   console.log("Updated searchField:", searchField);
  // }, [searchField]);

  // const filteredMonsters = monsters.filter((monster) =>
  //   monster.name.toLowerCase().includes(searchField)
  // );
  // const setFilterdMosters = ({}:<Monsters[]>) =>{

  // console.log("Filtered Monsters:", filteredMonsters); 
  
  return (
    <div className="App">
      <h1 className="app-title">Monsters</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder="Search Monsters" className={''} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
