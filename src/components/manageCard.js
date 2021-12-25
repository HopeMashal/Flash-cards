import React from "react";
import Card from "./card";
import Create from "./create";
import api from "../api/memory";

class ManageCard extends React.Component {
  state = {
    cards: [],
    addVisibility: true,
  };

  getCards = async () => {
    const { data } = await api.get();
    this.setState({ cards: data});
  };

  componentDidMount() {
    this.getCards();
  }

  render() {
    const createCard = this.state.addVisibility ? (
      <button
        className="add-btn"
        onClick={() => this.setState({ addVisibility: false })}>
        ⌨️ Create Card
      </button>
    ) : (
      <Create
        getCards={this.getCards}
        CreateCard={() => this.setState({ addVisibility: true })}
      />
    );
    const CardList = this.state.cards.map((card) => {
      return (
        <Card
          getCards={this.getCards}
          CardQA={card}
          key={card.id}
        />
      );
    }); 
    return (
      <div className="App">
        <div className="App-create">{createCard}</div>
        <div className="App-card-list">{CardList}</div>
      </div>
    );
  }
}

export default ManageCard;
