import React from 'react';
import './Board2.css';
import {Header} from '../Header/Header';
import {Basic} from '../basic/basic';
import {Button}from '../button/button';
import {Rules} from '../Rules/Rules';
import { Weapon } from "../weapon/weapon";

export class Board2 extends React.Component {
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
                    <Header gameMode={this.props.gameMode}/>
                    <Button onClick={this.rulesAction} />
                    
                    <div className='container'>
                        <div className='your-weapon'>
                            <p>YOU PICKED</p>
                            <Weapon class={this.props.userChoice} size='big'/>
                        </div>
                        <div className='house-weapon'>
                            <p>THE HOUSE PICKED</p>
                            <div className='placeholder'></div>
                        </div>
                    </div>
                    <Rules gameMode={this.props.gameMode} display={this.state.rulesDisplay} onClick={this.closeAction}/>
        </div>)
    }
}