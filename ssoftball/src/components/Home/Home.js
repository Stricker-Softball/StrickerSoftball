import React from 'react';
import './Home.scss';

import EqupmentPile from '../../images/equipment-pile.jpg';
import MitGlove from '../../images/mit-glove.jpg';
import Sillouete from '../../images/silouette-player.png';

function Home(props) {
    function buttonPress(link) {
        window.scrollTo(0, 0)
        props.history.push(link)
    }
    return (
        <div className="Home">
            <h1>Stricker Softball</h1>
            
            <h2>Coaching and lessons for all levels</h2>
            <div className='buttons'>
                <button className='button-main' onClick={() => buttonPress('/events')}>Clinics</button>
                <button className='button-main' onClick={() => buttonPress('/lessons')}>Lessons</button>
            </div>
            
            <div className='buttons-bottom'>
                <button className='button-main' onClick={() => buttonPress('/meetthecoach')}> Coaches</button>
            </div>
            <div className='images' >
                <img src={EqupmentPile} alt='equipment-pile' />
                <img src={MitGlove} alt='mit-glove' />
            </div>
            <h2>Take a look at our Clinics</h2>
            <img className='sillouete' src={Sillouete} alt='sillouete' />

        </div>
    );
}

export default Home;