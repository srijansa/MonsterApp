import './card-list.styles.css';
import {Monsters} from '../../App';
import React from 'react';

type CardProps = {
  monsters : Monsters;
}

const CardList = ({monsters}:CardProps) => {
  if (!monsters || !Array.isArray(monsters)) {
    return <h1>Loading...</h1>; 
  }
  return (
    <div className="card-list">
      {monsters.map((monster) => {
      //   <h1 key={monster.id}>{monster.name}</h1>
          const {name, email, id} = monster;
          return (
          <div className="card-container" key={id}>
              <img 
              alt={`moster ${name}`}
              src={`https://robohash.org/${id}?set=set2&size=180x180`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
          </div>
          )
      })}
    </div>
  );
}

export default CardList;
