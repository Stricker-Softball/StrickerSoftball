import React from 'react';
import './Lessons.scss';

import StrickerSoftballPng from '../../images/edits/stricker-softball-1.png';
import HeartBall from '../../images/heart-ball.png';
import SballBig from '../../images/Softball-big.jpg';
import MitBall from '../../images/mit-ball.jpg';


function Lessons(props) {

    function scrollToContacts() {
        // let element = document.getElementById('contact-id');
        // console.log(element)
        // setTimeout(function () {
        //     element.scrollTo({ top: 0 });
        // }, 2);
        window.scrollTo(0, 0)
        props.history.push('/contacts')

    }

    return (
        <div className="Lessons">
            <h1>Stricker Softball Lessons</h1>
            <div className="intro-section">

                <img className='stricker-softball-png' src={StrickerSoftballPng} alt='stricker-softball-png' />
                <p>Private, Semi - Private and Group Sessions</p>

                <button className='button-main' onClick={() => scrollToContacts()}>Schedule Appointment</button>
                <div className='images'>
                    <img className='mit-ball' src={MitBall} alt='mit-ball' />
                    <img className='softball-big' src={SballBig} alt='softball-big' />

                </div>
            </div>
            <div className='info-container' >
                <div className='info-section'>
                    <div className='section'>
                        <h2>Private and Semi - Private Lessons</h2>
                        <div className='section-text private-lessons'>

                            <div className='lesson-price'>
                                <div className='lesson-listing'>
                                    <p>30 Min. Private</p>
                                    <p>$40.00</p>
                                </div>
                                <div className='lesson-listing'>
                                    <p>30 Min. Semi - Private</p>
                                    <p>$45.00</p>
                                </div>
                                <div className='lesson-listing'>
                                    <p>60 Min. Private</p>
                                    <p>$70.00</p>
                                </div>
                                <div className='lesson-listing'>
                                    <p>60 Min. Semi - Private</p>
                                    <p>$80.00</p>
                                </div>

                            </div>
                            <div className='lesson-type'>
                                <p>Hitting</p>
                                <p>Infield/Outfield</p>
                                <p>Position Specific</p>
                            </div>
                        </div>
                    </div>
                    <div className='section group-session '>
                        <h2>Group Sessions</h2>
                        <div className='section-text'>
                            <p>Our Coaches will come to your teams practice and help your coaches run their practice, either at your space or we can customize
                                a practice at our facility for a very reasonable per player price. We can bring correct form and technique to your team in all aspects of your teams game.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img className='heart-ball' src={HeartBall} alt='love-softball' /> */}
            <div className='quote'>
                <h3>"Great things are done by a series of small things brought together"</h3>
                <span id='contact-id'>Vincent van Gogh</span>
            </div>

        </div>
    );
}

export default Lessons;