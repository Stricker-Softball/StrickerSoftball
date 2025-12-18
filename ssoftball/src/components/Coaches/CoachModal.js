import React, { useState } from 'react';
import './Coaches.scss';

function CoachModal(props) {
    console.log('CoachModal props', props)
    const { popup, setPopup, coachData } = props;
    
    let popupCoach = coachData;
    function handlePopup() {
        setPopup(!popup)
    }
  
    return (

        <>
            <div className={popup ? 'popup-main' : 'popup-main deactive'}>
                <div className='popup-window'>
                    <div className='close-x disable-select' onClick={() => handlePopup()} >X</div>
                    <h1>{popupCoach.first_name.toUpperCase()} {popupCoach.last_name.toUpperCase()}</h1>
                    {popupCoach.description && <div className='popup-text'>{popupCoach.description}</div>}
                    <div className='close-button disable-select' onClick={() => handlePopup()} >CLOSE</div>

                </div>
            </div>
        </>
    );
}

export default CoachModal;
