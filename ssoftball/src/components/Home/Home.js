import React from 'react';
import './Home.css';

import EqupmentPile from '../../images/equipment-pile.jpg';
import MitGlove from '../../images/mit-glove.jpg';
import Sillouete from '../../images/silouette-player.png';

function Home() {
    return (
        <div className="Home">
            <h1>Stricker Softball</h1>
            <div className='images' >
                <img src={EqupmentPile} alt='equipment-pile' />
                <img src={MitGlove} alt='mit-glove' />
            </div>
            <h2>Coaching and lessons for all levels</h2>
            <div className='buttons'>
                <button className='button-main'>Lessons</button>
                <button className='button-main'>Coaches</button>
            </div>
            <img className='sillouete' src={Sillouete} alt='sillouete' />

        </div>
    );
}

export default Home;