import React from 'react';
import {Board} from './Components/Board/Board';
import './App.css';
import {Board2} from './Components/Board2/Board2';
import {Board3} from './Components/Board3/Board3';
import {Board4} from './Components/Board4/Board4';

const data = {
  'rock': 'scissors',
  'paper': 'rock',
  'scissors': 'paper'
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameMode: 'basic',
      userChoice: 'scissors',
      houseChoice: 'paper',
      board1: 'block',
      board2: 'none',
      board3: 'none',
      board4: 'none',
      verb: 'WIN'
    }
    this.startGame = this.startGame.bind(this);
    this.newGame = this.newGame.bind(this);
  }
  
  startGame(e) {
    //get user choice and set user choice state
    const userChoice = e.target.classList[0];
    this.setState({userChoice: userChoice});
    console.log(userChoice);

    //determine house choice and set house choice state
    let houseChoice;
    let num = Math.floor((Math.random() * 30) + 1); //generate ranum number between 1 and 30
    if (num <= 10) {
      houseChoice = 'rock'
    } else if (num > 10 && num <= 20) {
      houseChoice = 'paper'
    } else {
      houseChoice = 'scissors'
    }
    console.log(houseChoice);
    this.setState({houseChoice: houseChoice})

    //go to board 2
    this.setState({
      board1: 'none',
      board2: 'block'
    });

    //wait a bit and go to board 3
    setTimeout(( )=> {
      this.setState({
        board2: 'none',
        board3: 'block'
      })
    }, 1000);

    //determine winner and set verb state
    let verb;
    if (data.userChoice === houseChoice) {
      verb = 'WIN'
    } else if (userChoice === houseChoice) {
      verb = 'DRAW'
    } else {
      verb = 'LOSE'
    };
    this.setState({verb: verb})

    //wait a bit and go to board 4
    setTimeout(( )=> {
      this.setState({
        board3: 'none',
        board4: 'block'
      })
    }, 1900);
  }

  newGame() {
    this.setState({
      board4: 'none',
      board1: 'block'
    })
  }

  render() {
    return (<div>
      <Board gameMode={this.state.gameMode} display={this.state.board1} onClick={this.startGame}/>
      <Board2 gameMode={this.state.gameMode} display={this.state.board2} userChoice={this.state.userChoice}/>
      <Board3 gameMode={this.state.gameMode} display={this.state.board3} houseChoice={this.state.houseChoice} userChoice={this.state.userChoice}/>
      <Board4 gameMode={this.state.gameMode} onClick={this.newGame} display={this.state.board4} houseChoice={this.state.houseChoice} userChoice={this.state.userChoice} verb={this.state.verb}/>
      </div>
    );
  };
}

export default App;
