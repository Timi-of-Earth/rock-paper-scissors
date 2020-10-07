import React from 'react';
import {Board} from './Components/Board/Board'
import './App.css';

const data = {
  basic: ['rock', 'paper', 'scissors'],
  advanced: ['rock', 'paper', 'scissors', 'lizard', 'spock']
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameMode: 'basic',
      userChoice: '',
      houseChoice: ''
    }
  }
  render() {
    return (
      <Board gameMode={this.state.gameMode}/>
    );
  };
}

export default App;
