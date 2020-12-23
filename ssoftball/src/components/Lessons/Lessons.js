import React from 'react';
import './Lessons.scss';


function Lessons() {
    return (
        <div className="Lessons">
            <h1>Stricker Softball Lessons</h1>
            <p>Private, Semi - Private and Group Sessions</p>
            <button className='button-main'>Schedule Appointment</button>
            <div className='info-section'>
                <div className='section'>
                    <h2>Private and Semi - Private Lessons</h2>
                    <div className='section-text private-lessons'>
                        <p>Hitting</p>
                        <p>Infield/Outfield</p>
                        <p>Position Specific</p>

                        <p>30 Min. Private Lessons $40.00</p>
                        <p>30 Min. Semi - Private Lessons $45.00</p>
                        <p>60 Min. Private Lessons $70.00</p>
                        <p>60 Min. Semi - Private Lessons $80.00</p>
                    </div>
                </div>
                <div className='section'>
                    <h2>Group Sessions</h2>
                    <div className='section-text'>
                        <p>Our Coaches will come to your teams practice and help your coaches run their practice, either at your space or we can customize
                            a practice at our facility for a very reasonable per player price. We can bring correct form and technique to your team in all aspects of your teams game.</p>
                    </div>
                </div>
            </div>
            <div className='quote'>
                <h3>"Great things are done by a series of small things brought together"</h3>
                <span>Vincent van Gogh</span>
            </div>


        </div>
    );
}

export default Lessons;