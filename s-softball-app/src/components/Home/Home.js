import React from 'react';
import './Home.css';

import EqupmentPile from '../../images/equipment-pile.jpg';
import MitGlove from '../../images/mit-glove.jpg';

function Home() {
    return (
        <div className="Home">
            <h1>Stricker Softball</h1>
            <div className='images' >
                <img src={EqupmentPile} />
                <img src={MitGlove} />
            </div>
        </div>
    );
}

export default Home;