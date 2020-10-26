import React from 'react';
import './board.css';
import {Header} from '../Header/Header';
import {Basic} from '../basic/basic';
import {Button}from '../button/button';
import {Rules} from '../Rules/Rules';

export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rulesDisplay: 'none'
        }
        this.rulesAction = this.rulesAction.bind(this);
        this.closeAction = this.closeAction.bind(this);
    }
    rulesAction() {
        if (this.state.rulesDisplay === 'none') {
            this.setState({rulesDisplay: 'block'});

        } else {
            this.setState({rulesDisplay: 'none'})
        };
    }
    closeAction() {
        this.setState({rulesDisplay: 'none'});
    }
    render() {
        return (<div className='background' style={{display: this.props.display}}>
                    <Header gameMode={this.props.gameMode} score={this.props.score} />
                    <Basic onClick={this.props.onClick}/>
                    <Button onClick={this.rulesAction} />
                    <Rules gameMode={this.props.gameMode} display={this.state.rulesDisplay} onClick={this.closeAction}/>
        </div>)
    }
}