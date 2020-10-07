import React from 'react';
import './button.css';

export class Button extends React.Component {
    render() {
        return <div className='button'>
            <button onClick={this.props.onClick}>RULES</button>
        </div>
    }
}