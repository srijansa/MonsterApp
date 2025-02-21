import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    if (!monsters || !Array.isArray(monsters)) {
      return <h1>Loading...</h1>; 
    }
    return (
      <div>
        {monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1> 
        ))}
      </div>
    );
  }
}

export default CardList;
