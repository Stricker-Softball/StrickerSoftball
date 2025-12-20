import React from 'react';
import './Coaches.scss';

function CoachModal(props) {
    console.log('CoachModal props', props)
    const { popup, setPopup, coachData, expandedSrc, setExpandedSrc } = props;
    
    let popupCoach = coachData;
    function handlePopup() {
        setPopup(!popup)
    }
  
    return (

        <>
            <div className={popup ? 'popup-main' : 'popup-main deactive'}>
                <div className='popup-window'>
                    <div className='close-x disable-select' onClick={() => handlePopup()} >X</div>
                    <h1 className='gradient-text'>{popupCoach.first_name} {popupCoach.last_name}</h1>
                    {popupCoach.description && <div className='popup-text'>{popupCoach.description}</div>}
                    <div className='close-button button-main disable-select' onClick={() => handlePopup()} >CLOSE</div>

                </div>
            </div>
             {expandedSrc ? (
          <div className="ad-fullscreen" role="dialog" aria-modal="true" onClick={() => setExpandedSrc(null)}>
            <div className="frame" onClick={(e)=>e.stopPropagation()}>
              <img src={expandedSrc} alt="Expanded" />
              <button className="close-btn" onClick={() => setExpandedSrc(null)} aria-label="Close expanded view">Close</button>
            </div>
          </div>
        ) : null}
        </>
    );
}

export default CoachModal;
