import React from 'react';
import './Header.css';

const data = {
    "basic": ['ROCK', 'PAPER', 'SCISSORS'],
    'advanced': ['ROCK', 'PAPER', 'SCISSORS', 'LIZARD', 'SPOCK']
  };

export class Header extends React.Component {
    render() {
        const weapons = data[this.props.gameMode];
        return (
            <div className='header'>
                <div className='title'>
                    <ul>
                        {weapons.map(element => {
                            return <li>{element}</li>
                        })}
                        </ul>
                </div>
                <div className='score'>
                    <p>SCORE</p>
                    <h1>{this.props.score}</h1>
                </div>
            </div>
        )
    }
}