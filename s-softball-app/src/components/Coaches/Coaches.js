import React, { useState } from 'react';
import './Coaches.css';

import SuePortriat from '../../images/coaches/sue-portrait.png';
import MegPortrait from '../../images/coaches/megan-portrait.png';
import JenaPortrait from '../../images/coaches/jennah-portrait.png';
import JenyPortrait from '../../images/coaches/jenny-portrait.png';
import AllyPortrait from '../../images/coaches/ally-portrait.png';
import DotPortrait from '../../images/coaches/dot-portrait.png';




function Coaches() {
    const [popup, setPopup] = useState(false);
    let coaches = [
        { name: 'coach sue', image: SuePortriat, color: 'red' },
        { name: 'coach megan', image: MegPortrait, color: 'blue' },
        { name: 'coach Jennah', image: JenaPortrait, color: 'blue' },
        { name: 'coach Jenny', image: JenyPortrait, color: 'red' },
        { name: 'coach ally', image: AllyPortrait, color: 'red' },
        { name: 'coach Dot', image: DotPortrait, color: 'blue' }
    ]

    function handlePopup() {
        if (popup == false) {
            setPopup(true)
        } else {
            setPopup(false)
        }
    }

    return (

        <>
            <div className={popup ? 'popup-main' : 'popup-main deactive'}>
                <div onClick={() => handlePopup()} className='popup-window'>

                </div>
            </div>
            <div className="Coaches">
                <h1>- Changing the game one player at a time -</h1>
                <div className='coach-container'>
                    {coaches.map((coach, index) => {
                        return (
                            <div className={`${coach.color === 'blue' ? 'coach-card card-2nd' : 'coach-card'}`}>
                                <h2 className='name'>{coach.name.toUpperCase()}</h2>
                                <div className='img-div'>
                                    <div className='img-overflow'>
                                        <img src={coach.image} alt={coach.name} />
                                    </div>
                                </div>
                                <div className='btn-div'>
                                    <button onClick={() => handlePopup()} className='button-main'>Profile</button>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div>
                    <h1>Do today what others won't so tomorrow you can do what others can't.</h1>
                    <h1>- Jerry Rice</h1>
                </div>
            </div>
        </>
    );
}

export default Coaches;