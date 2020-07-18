import React from 'react'
import './Animation.css'
import Brain from './Brain.svg'
import FrontLayer from './FrontLayer.svg'
import Intro from './Intro.svg'
const Animation = () => {
    return (
        <div className='animation'>
            <img className="brain" src={Brain}  alt=""/>
            <img className="frontLayer" src={FrontLayer} alt=""/>
            <img className="Intro" src={Intro} alt="" />
        </div>
    )
}

export default Animation
