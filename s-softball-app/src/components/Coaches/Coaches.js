import React, { useState } from 'react';
import './Coaches.css';

import SuePortriat from '../../images/coaches/sue-portrait.png';
import SueHitting from '../../images/coaches/sue-hitting.png';
import MegPortrait from '../../images/coaches/megan-portrait.png';
import MegHitting from '../../images/coaches/megan-hitting.jpg';
import JenaPortrait from '../../images/coaches/jennah-portrait.png';
import JenyPortrait from '../../images/coaches/jenny-portrait.png';
// import AllyPortrait from '../../images/coaches/ally-portrait.png';
// import DotPortrait from '../../images/coaches/dot-portrait.png';
import LukePortrait from '../../images/coaches/luke-portrait.png';



let coaches = [
    {
        first_name: 'sue', last_name: 'Stricker', images: [SuePortriat, SueHitting], color: 'red',
        description: `Coach Sue Stricker has been playing and coaching the game for over 20 years. She is currently the General Manager at Bring It Sports where she gives private, small group, and team lessons. Her CUDIT Concentric Hitting lessons bring her hitters in the area to a level like no other.

    Sue has coached area teams such as the Wasco Diamonds 14U (Head Coach), Homer Hawks Gold 16U and 18U (Assistant Coach), The Northern Illinois Lightning (Head Coach) 14U and 16U, and the St. Charles Angels (Head Coach). She has also coached Varsity and J.V. High School teams.
    
    Sue has coached every skill level in softball. From a beginner travel team at 10U playing USSSA to a Gold Level PGF team at 18U which played in both ASA and PGF. She has helped bring her teams to Nationals at all levels on several occasions and placing in the semi- finals and finals, with the last team she brought to Nationals winning 1st place.
    
    Coach has also helped many of her players move onto the College Level. She has helped place players on teams at the D1, D2, D3 and NAIA levels. Some of these schools include Illinois State University, University of Missouri St. Louis, UIPUI, Purdue Calumet, and Clarke University. 
    
    Sue is currently the Certified CUDIT Concentric Hitting Coach of four teams and gives lessons to athletes of all ages. Be ready to transform your swing and mindset when working with Coach Sue Stricker!`
    },
    {
        first_name: 'Megan', last_name: 'Stricker', images: [MegPortrait], color: 'blue',
        description:
            `Megan  Stricker is a former girls travel softball player of 12 years.  She then went on to play college ball at Waubonsee Community College and Clarke University In Iowa.    In the past she served as an Assistant Coach for the 14U Wasco Diamonds travel program, and Geneva Park District Youth Softball.   She helped take her team to National competition where they won first place in the “A” division. She has been giving private and group lessons as well as running Offensive and Defensive clinics with larger groups for establishments including Geneva Baseball, The Geneva Park District, The Oswego Outlaws  and Elite Sports training. She is looking forward to bringing her expertise to the brand new facility that Bring It! Sports Academy has to offer.




Contact Info
Cell:     630-306-8176
Email:   Megan_stricker@yahoo.com`
    },
    {
        first_name: 'Jennah', last_name: 'Perryman', images: [JenaPortrait], color: 'blue',
        description:
            `Jennah Perryman is a retired softball player with 10 years of elite travel ball experience. She was a four year varsity starter for Elgin High School where she was awarded the following accolades: 4-time All- Conference, 4-time All-District Selectee, Chicago Sun-Times Top 100 player, and two time Adidas Features selectee. She continued her career at The University of Missouri- St. Louis playing 3rd base, 2nd base, and catcher where she was a four year starter. She was awarded with Freshman of the Year, Third Team D2CCA All Region, Second Team All Great Lakes Valley Conference, Second Team NFCA Midwest Region, and NCAA D2 All-American. After finishing her career she served as the Assistant Student Coach for the UMSL Tritons Softball Team. She has trained and facilitated pitching clinics, defensive clinics and hitting clinics across the Midwest. She is driven to bring her knowledge, techniques and love of softball to mold her clients into the collegiate prospects of tomorrow.`
    },
    {
        first_name: 'Jenny', last_name: '', images: [JenyPortrait], color: 'red'
    },
    // {
    //     first_name: 'ally', last_name: '', images: AllyPortrait, color: 'red'
    // },
    // {
    //     first_name: 'Dot', last_name: '', images: DotPortrait, color: 'blue'
    // },
    {
        first_name: 'Luke', last_name: 'Stricker', images: LukePortrait, color: 'blue',
        description: 
        `Coach Luke is a certified speed and agility instructor through Nesta.  Luke grew up playing travel baseball and travel soccer from an early age.  He continued his sports career in both High School and College.  He graduated with a degree in Biology with an emphasis on EMT certification, anatomy, and Speed and Agility.  

        Luke has been involved in training young athletes in baseball, softball, soccer and Lacrosse.  His focus now remains in  teaching young athletes speed and agility , foot work , and correct muscle movement for hitting and fielding.
        `
    }
]

function Coaches() {
    const [popup, setPopup] = useState(false);
    const [popupCoach, setCoach] = useState(coaches[1])


    function handlePopup(coach = 'None') {
        console.log(coach)
        if (coach !== 'None') {
            setCoach(coach)
        }


        if (popup == false) {
            setPopup(true)
        } else {
            setPopup(false)
        }
    }

    return (

        <>
            <div className={popup ? 'popup-main' : 'popup-main deactive'}>
                <div className='popup-window'>
                    <div className='close-x disable-select' onClick={() => handlePopup()} >X</div>
                    <h1>{popupCoach.first_name.toUpperCase()} {popupCoach.last_name.toUpperCase()}</h1>
                    {popupCoach.description && <div className='popup-text'>{popupCoach.description}</div>}

                </div>
            </div>
            <div className="Coaches">
                <h1>- Changing the game one player at a time -</h1>
                <div className='coach-container'>
                    {coaches.map((coach, index) => {
                        return (
                            <div className={`${coach.color === 'blue' ? 'coach-card card-2nd' : 'coach-card'}`}>
                                <h2 className='name'>COACH {coach.first_name.toUpperCase()}</h2>
                                <div className='img-div'>
                                    <div className='img-overflow'>
                                        <img src={coach.images} alt={coach.first_name} />
                                    </div>
                                </div>
                                <div className='btn-div'>
                                    <button onClick={() => handlePopup(coach)} className='button-main'>Profile</button>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div className='end-quote'>
                    <h1>Do today what others won't so tomorrow you can do what others can't.</h1>
                    <h1>- Jerry Rice</h1>
                </div>
            </div>
        </>
    );
}

export default Coaches;