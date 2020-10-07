import React from 'react';
import './board.css';
import {Header} from '../Header/Header';
import {Basic} from '../basic/basic';
import {Button}from '../button/button'

export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rulesDisplay: 'none'
        }
    }
    rulesAction() {
        if (this.state.rulesDisplay === 'none') {
            this.setState({rulesDisplay: 'block'})
        } else {
            this.setState({rulesDisplay: 'none'})
        };
    }
    render() {
        return (<div className='background'>
                    <Header gameMode={this.props.gameMode}/>
                    <Basic />
                    <Button onClick={this.rulesAction} />
        </div>)
    }
}