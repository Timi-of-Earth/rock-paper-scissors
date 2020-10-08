import React from 'react';
import { Weapon } from '../weapon/weapon';
import './basic.css';

export class Basic extends React.Component {
    render() {
        return (
            <div className='basic'>
                <div className='upper'>
                    <Weapon class='rock' size='small'/>
                    <Weapon class='paper' size='small'/>
                </div>
                <div className='lower'>
                    <Weapon class='scissors' size='small'/>
                </div>
            </div>
        )
    }
}