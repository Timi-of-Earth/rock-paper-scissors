import React from 'react';
import './rules.css';
import rules from './image-rules.svg';
import adrules from './image-rules-bonus.svg';
import close from './icon-close.svg';

const data = {
    basic: rules,
    advanced: adrules
}

export class Rules extends React.Component {
    render() {
        return <div className='rules-div'><div className='rules' style={{display: this.props.display}}>
            <h1>RULES <img src={close} className='close' onClick={this.props.onClick}/></h1>
            
            <img src={data[this.props.gameMode]} className='rules-image'/>
        </div></div>
    }
}