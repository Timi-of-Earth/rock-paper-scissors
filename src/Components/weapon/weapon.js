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
        if (this.props.size === 'small') {
            return (
                <div className={`${this.props.class} ${this.props.class}-div small`} onClick={this.props.onClick}>
                    <div className={`${this.props.class} plate small-plate`}>
                        <img src={`${imageData[this.props.class]}`} className={`${this.props.class} -img`} />
                    </div>
                </div>
            )
        } else {
            return (
                <div className={`${this.props.class}-div big`}>
                    <div className='plate big-plate'>
                        <img src={`${imageData[this.props.class]}`} className='big-img' />
                    </div>
                </div>
            )
        }
    }
}