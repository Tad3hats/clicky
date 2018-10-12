import React, { Component } from 'react';
import './App.css';
import ReactDOM from "react-dom";
import Navbar from './components/Navbar.js';
// import ClickCard from './components/ClickCard/ClickCard.js';
import Jumbotron from './components/Jumbotron';
import cards from './components/cards.json';

class App extends Component {
  state = {
    cards: cards,
    score: 0,
    topScore: 0,
    clickedCards: [],
    charactersChosen: [],
  }

  renderCards = () => {
    return this.state.cards.map((card, index) => {
      return <div onClick={() => this.handleOnClick(card.name)} key={index} style={{ display: "inline-block" }}>
        {/* <h3>{card.id}</h3>
        <h3>{card.name}</h3> */}
        <img src={card.image} style={{ width: "150px", height: "100px", padding: "10px" }} />
      </div>;
    })
  }

  handleOnClick = (character) => {
    const imageOrder = this.state.images;

    console.log(character);

    let cardsClicked = this.state.charactersChosen;
    if (cardsClicked.indexOf(character) === -1) {
      cardsClicked.push(character);
      const { topScore, score } = this.state;
      const newScore = score + 1;
      const newTopScore = newScore > topScore ? newScore : topScore;

      return this.setState({
        image: imageOrder.sort(() => Math.random() - 0.5),
        message: "You Guessed Correctly!",
        score: newScore,
        topScore: newTopScore,
      })

    } else {
      console.log("you lose!");
      //reset it
    }
    this.setState({ charactersChosen: cardsClicked })
    console.log(this.state.charactersChosen);

  }



  render() {

    return (
      <div className="container-fluid">
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Jumbotron />
        <br />
        <div className="container row cardWrapper">
          {this.renderCards()}
        </div>

      </div >
    );
  }
}

export default App;
