import React from 'react';
import './board.css';
import {Header} from '../Header/Header';
import {Basic} from '../basic/basic';
import {Button}from '../button/button';
import {Rules} from '../Rules/Rules'

export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rulesDisplay: 'block'
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
        return (<div className='background'>
                    <Header gameMode={this.props.gameMode}/>
                    <Basic />
                    <Button onClick={this.rulesAction} />
                    <Rules gameMode={this.props.gameMode} display={this.state.rulesDisplay} onClick={this.closeAction}/>
        </div>)
    }
}