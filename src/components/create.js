import React from "react";
import api from "../api/memory";

class Create extends React.Component {
  state = { Question: "", Answer: ""};

  postCards = async (e) => {
    e.preventDefault();
    await api.post("/", this.state);
    this.props.getCards();
    this.props.CreateCard();
  };

  render() {
    return (
      <div className="Create-Container">
        <div className="Create-Inputs">
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
        </div>
        <button className="add-btn" type="submit" onClick={this.postCards}>
        ➕⌨️ Create
        </button>
      </div>
    );
  }
}
export default Create;
