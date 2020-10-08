import React from 'react';
import {Board} from './Components/Board/Board';
import './App.css';
import {Board2} from './Components/Board2/Board2';

const data = {
  basic: ['rock', 'paper', 'scissors'],
  advanced: ['rock', 'paper', 'scissors', 'lizard', 'spock']
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameMode: 'basic',
      userChoice: 'scissors',
      houseChoice: '',
      board1: 'none',
      board2: 'block',
      board3: 'none'
    }
  }
  render() {
    return (<div>
      <Board gameMode={this.state.gameMode} display={this.state.board1}/>
      <Board2 gameMode={this.state.gameMode} display={this.state.board2} userChoice={this.state.userChoice}/>
      </div>
    );
  };
}

export default App;
