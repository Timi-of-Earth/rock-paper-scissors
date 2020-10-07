import React from 'react';
import { Weapon } from '../weapon/weapon';
import './basic.css';

export class Basic extends React.Component {
    render() {
        return (
            <div className='basic'>
                <div className='upper'>
                    <Weapon class='rock'/>
                    <Weapon class='paper'/>
                </div>
                <div className='lower'>
                    <Weapon class='scissors'/>
                </div>
            </div>
        )
    }
}