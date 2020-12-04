import React from 'react';
import './Coaches.css';


function Coaches() {
    return (
        <div className="Coaches">
            <h1>Changing the game one player at a time</h1>
            <div className='coach-container'>
                <div className='coach-sectoin'>
                    <div className='coach-card'>
                        <h2 className='name'>Coach Sue</h2>
                        <img />
                        <button className='button-main'>Profile</button>
                    </div>
                    <div className='coach-card'></div>
                </div>
                <div className='coach-sectoin'>
                    <div className='coach-card'></div>
                    <div className='coach-card'></div>
                </div>
                <div className='coach-sectoin'>
                    <div className='coach-card'></div>
                    <div className='coach-card'></div>
                </div>
            </div>
        </div>
    );
}

export default Coaches;