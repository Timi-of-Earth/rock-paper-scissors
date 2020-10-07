import React from 'react';
import './weapon.css';
import rockImage from './icon-rock.svg';
import paperImage from './icon-paper.svg';
import scissorsImage from './icon-scissors.svg';

const imageData = {
    rock: rockImage,
    paper: paperImage,
    scissors: scissorsImage
}

export class Weapon extends React.Component {
    render() {
        return (
            <div className={this.props.class}>
                <div className='plate'>
                    <img src={imageData[this.props.class]} />
                </div>
            </div>
        )
    }
}