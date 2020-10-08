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
                <div className={`${this.props.class} small`}>
                    <div className='plate small-plate'>
                        <img src={`${imageData[this.props.class]}`} className='small-img' />
                    </div>
                </div>
            )
        } else {
            return (
                <div className={`${this.props.class} big`}>
                    <div className='plate big-plate'>
                        <img src={`${imageData[this.props.class]}`} className='big-img' />
                    </div>
                </div>
            )
        }
    }
}