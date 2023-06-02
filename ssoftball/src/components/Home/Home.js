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
            <h1>Stricker Softball & Softball Science</h1>
            
            <h2>Coaching and lessons for all levels</h2>
            <div className='buttons'>
                <button className='button-main' onClick={() => buttonPress('/events')}>Clinics</button>
                <button className='button-main' onClick={() => buttonPress('/lessons')}>Lessons</button>
            </div>
            
            <div className='buttons-bottom'>
                <button className='button-main' onClick={() => buttonPress('/meetthecoach')}> Coaches</button>
            </div>
            <p class='science-paragraph'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Softball Science was created by 2 Women who have a vast
history in the softball realm of today's world. Let’s face it
technology has become a part of our whole world. We have
taken our over 30 years of coaching experience along with our
experience in the technology field, available to us and brought
them together to create Softball Science.
At Softball Science we have created a metrically driven program
specifically designed to enhance the raw power behind your
softball swing. All we need from you is to bring YOUR swing from
your instructor and we will teach your body to supply the power!
Our Vision is to let softball players believe in themselves and
support them in every aspect of the game, physically and
mentally. We will show them the science of bringing both aspects
to the field with them as they go through their softball journey!</p>
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