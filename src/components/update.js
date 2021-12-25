import React from "react";
import api from "../api/memory";
import cardImage from './images/card.png'

class Update extends React.Component {
  constructor(props) {
    super(props);
    const { Question,Answer } = this.props.initial;
    this.state = { Question,Answer };
  }

  handleUpdate = async (e) => {
    e.preventDefault();
    this.props.visibleFunc();
    await api.put(this.props.id, this.state);
    this.props.getCards();
  };

  handleCancel = async () => {
    this.props.visibleFunc();
  };

  render() {
    return (
      <div className="Update">
        <div className="image-cards">
            <img className="card-image" src={cardImage} alt="product"/>
          </div>
        <div>
          <input
            type="text"
            name={this.state.Question}
            placeholder={`New Question`}
            value={this.state.Question}
            onChange={e=>this.setState({Question:e.target.value})}
          />
          <br/>
          <input
            type="text"
            name={this.state.Answer}
            placeholder={`New Answer`}
            value={this.state.Answer}
            onChange={e=>this.setState({Answer:e.target.value})}
          />
          <br/>
          <button className="Btn" type="submit" onClick={this.handleUpdate}>
            💾 Save
          </button>
          <button className="Btn" onClick={this.handleCancel}>🙅🏻 Cancel</button>
        </div>
      </div>
    );
  }
}
export default Update;