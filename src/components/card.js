import React from "react";
import Update from "./update";
import api from "../api/memory";
import cardImage from './images/card.png'

class Card extends React.Component {
  state = { visibilityUpdate: false, id: "" };

  changeVisible = () => {
    return this.setState({ visibilityUpdate: !this.state.visibilityUpdate });
  };

  deleteCards = async () => {
    await api.delete(`/${this.props.CardQA.id}`);
    this.props.getCards();
  };

  render() {
    if (this.state.visibilityUpdate)
      return (
        <div key={this.props.CardQA.id} className="Card">
          <Update
            id={this.props.CardQA.id}
            getCards={this.props.getCards}
            visibleFunc={this.changeVisible}
            initial={this.props.CardQA}
          />
        </div>
      );
    const { Question, Answer } = this.props.CardQA;
    return (
      <div key={this.props.CardQA.id} className="Card">
          <div className="image-cards">
            <img className="card-image" src={cardImage} alt="product"/>
          </div>
          <div>
            <b>Question:</b><br/> {Question}
            <br /><hr/>
            <b>Answer:</b><br/> {Answer}
            <br />
            <button className="Btn" onClick={this.changeVisible}>📝 Update</button>
            <button className="Btn" onClick={this.deleteCards}>🗑️ Remove</button>
          </div>
      </div>
    );
  }
}
export default Card;