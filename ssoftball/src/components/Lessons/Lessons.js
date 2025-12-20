import React from 'react';
import './Lessons.scss';

// removed unused image imports
import SballBig from '../../images/Softball-big.jpg';
import MitBall from '../../images/mit-ball.jpg';


function Lessons(props) {

    function scrollToContacts() {
        window.scrollTo(0, 0)
        props.history.push('/contacts')

    }
        const {
                heightClass = '',
                bgUrl = MitBall,
                bgUrl2 = SballBig,
                overlay = true,
                textAlignClass = '',
                title = 'Lessons',
                body = ''
        } = props;

    return (
        <div className="Lessons">
                        <section
                            className={`hero-section ${heightClass}`}
                            style={
                                bgUrl2
                                    ? { backgroundImage: `url(${bgUrl2})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                                    : undefined
                            }
                        >
                            {overlay && <div className="hero-overlay" />}

                            <div className={`hero-inner ${textAlignClass}`}>
                                <h1 className="hero-title">{title}</h1>
                                {body && <p className="hero-subtitle">{body}</p>}
                            </div>
                        </section>
                        {/* <div className="wave-section-top"></div> */}
            <div className="gradient-bg wave-section">
                <div className=" top-wave" aria-hidden>
                    <svg viewBox="0 0 1440 140" className="" preserveAspectRatio="none">
                    <path d="M0,80 C240,140 480,0 720,60 C960,120 1200,20 1440,80 L1440,140 L0,140 Z" />
                    </svg>
                </div>
            <div className="intro-section" id="lessonsintro">

                <p className="gradient-text">Private, Semi - Private and Group Sessions</p>

                <button className='button-main' onClick={() => scrollToContacts()}>Schedule an Appointment</button>
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
                                <p>Hitting</p><p>|</p>
                                <p>Infield/Outfield</p><p>|</p>
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
            </div><div className=" bottom-wave" aria-hidden>
                    <svg viewBox="0 0 1440 140" className="" preserveAspectRatio="none">
                    <path d="M0,80 C240,140 480,0 720,60 C960,120 1200,20 1440,80 L1440,140 L0,140 Z" />
                    </svg>
                </div>
            </div>
            
            {/* <div className="wave-section-bottom"></div> */}
            {/* <img className='heart-ball' src={HeartBall} alt='love-softball' /> */}
            <section
                            className={`hero-section ${heightClass}`}
                            style={
                                bgUrl
                                    ? { backgroundImage: `url(${bgUrl2})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                                    : undefined
                            }
                        >
                            {overlay && <div className="hero-overlay" />}

                            <div className={`hero-inner ${textAlignClass}`}>
                                <h1 className="hero-title">{title}</h1>
                                <h3>"Great things are done by a series of small things brought together"</h3>
                <span id='contact-id'>- Vincent van Gogh -</span>
                            </div>
                        </section>
            

        </div>
    );
}

export default Lessons;