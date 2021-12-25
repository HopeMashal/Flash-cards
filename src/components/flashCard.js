import React from "react";
import FlashCardsApi from "../api/memory";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Card from './images/card-1.png'

class FlashCard extends React.Component {
  state = { 
    count:0,
    studyCards: [],
    question: "",
    answer: "",
    currentItem: 0,
    numOfItems:0,
    result:'none',
    resultText:'',
    Btn:'none',
    BtnNext:'',
    BtnText:'Start',
    bg:`linear-gradient(rgba(87, 226, 226, 0.7), rgba(255, 255, 255, 0.7)),url(${Card}) no-repeat 50% 50%`,
    bgB:`linear-gradient(rgba(87, 226, 226, 0.7), rgba(255, 255, 255, 0.7))`,
  };

  componentDidMount = () => {
    this.getData();
  };
  getData = async () => {
    const response = await FlashCardsApi.get("");
    this.setState({ studyCards: response.data,numOfItems:response.data.length });
  };
  nextCard = () => {
    if (this.state.currentItem + 1 <= this.state.numOfItems) {
      this.setState({ currentItem: this.state.currentItem+1,result:'none',BtnText:'Next Card' })
      this.renderCard();
    } else {
      this.setState({Btn:'block',BtnNext:'none'});
    }
  };
  setCount=()=>{
    if(this.state.Btn==='block') return
    this.setState({count:this.state.count+1,result:'none'})
    if(this.state.count+1===this.state.studyCards.length){
      return this.setState({resultText:'Great, you have completed all the flashes cards.',Btn:'block',BtnNext:'none'})
    }
    this.nextCard();
  }

  renderCard = async () => {
    if (this.state.currentItem < this.state.studyCards.length) {
      const card = await this.state.studyCards[this.state.currentItem];
      this.setState({ question: card.Question });
      this.setState({ answer: card.Answer });
    } 
  };
  flip=()=>{
    console.log('clicked');
    if(this.state.Btn==='block') return
    this.setState({result:'block'})
  }

  render() {
    return (
      <div className="test-page">
        <div className="test-container">
          <div className="flipCard-container"> 
            <Flippy 
              onClick={this.flip}
              flipOnHover={false}
              flipOnClick={true} 
              flipDirection="horizontal" 
              style={{ width: '200px', height: '250px' }}
            >
              <FrontSide
                style={{
                  background: this.state.bg,fontSize:'25px',lineHeight:'30px',textAlign:'justify'
                }}
              >
                {this.state.question}
              </FrontSide>
              <BackSide
                style={{ background: this.state.bgB,fontSize:'25px',lineHeight:'30px',textAlign:'justify'}}>
                {this.state.answer}
              </BackSide>
            </Flippy> 
          </div>
          <div className="container-result">
            <div>
              <br/>
              <button className="next-btn" style={{display:this.state.BtnNext}} onClick={this.nextCard}>
                {this.state.BtnText}
              </button>
              <div className="result" style={{display:this.state.result}}>
                <h4>Did you get it right?</h4>
                <div className="BtnYN">
                  <button className="YN-Btn" onClick={this.setCount}>YES</button>
                  <button className="YN-Btn" onClick={this.setCount}>NO</button>
                </div>
              </div>
            </div>
            <span>
              Completed: {this.state.count} / {this.state.studyCards.length}
              <h4>{this.state.resultText}</h4>
              <center><button className="next-btn" style={{display:this.state.Btn}} onClick={()=>window.location.reload(false)}>Play Again</button></center>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default FlashCard;