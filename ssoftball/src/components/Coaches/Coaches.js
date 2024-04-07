import React, { useState } from 'react';
import './Coaches.scss';


import BatImg from '../../images/batSilo.png';
import SuePortriat from '../../images/coaches/sue-portrait.png';
// import SueHitting from '../../images/coaches/sue-hitting.png';
import MegPortrait from '../../images/coaches/megan-portrait.png';
import MegHitting from '../../images/edits/megan-hitting-1.jpg';
import JenaPortrait from '../../images/coaches/jennah-portrait.png';
import KristinClose from '../../images/coaches/kristinclose.png';
import KristinPortait from '../../images/coaches/kristin.jpg';
import HuntPortrait from '../../images/coaches/hunter.jpg';
import LukePortrait from '../../images/coaches/luke-portrait.png';



let coaches = [
    {
        first_name: 'sue', last_name: 'Stricker', images: [SuePortriat,BatImg,BatImg], color: 'blue',
        description: `Coach Sue Stricker has been playing and coaching the game for over 20 years. She is currently the Head Coach for the Wasco Daimonds 14 U team, and the General Manager at Bring It Sports where she gives private, small group, and team lessons. Her CUDIT Concentric Hitting lessons bring her hitters in the area to a level like no other.

    Sue has coached area teams such as the Wasco Diamonds 14U (Head Coach), Homer Hawks Gold 16U and 18U (Assistant Coach), The Northern Illinois Lightning (Head Coach) 14U and 16U, and the St. Charles Angels (Head Coach). She has also coached Varsity and J.V. High School teams.
    
    Sue has coached every skill level in softball. From a beginner travel team at 10U playing USSSA to a Gold Level PGF team at 18U which played in both ASA and PGF. She has helped bring her teams to Nationals at all levels on several occasions and placing in the semi- finals and finals, with the last team she brought to Nationals winning 1st place.
    
    Coach has also helped many of her players move onto the College Level. She has helped place players on teams at the D1, D2, D3 and NAIA levels. Some of these schools include Illinois State University, University of Missouri St. Louis, UIPUI, Purdue Calumet, and Clarke University. 
    
    Sue is currently the Certified CUDIT Concentric Hitting Coach of four teams and gives lessons to athletes of all ages. Be ready to transform your swing and mindset when working with Coach Sue Stricker!`
    },
    {
        first_name: 'Megan', last_name: 'Stricker', images: [MegPortrait, MegHitting, MegHitting], color: 'red',
        description:
            `Megan  Stricker is a former girls travel softball player of 12 years.  She then went on to play college ball at Waubonsee Community College and Clarke University In Iowa.    In the past she served as an Assistant Coach for the 14U Wasco Diamonds travel program, and Geneva Park District Youth Softball.   She helped take her team to National competition where they won first place in the “A” division. She has been giving private and group lessons as well as running Offensive and Defensive clinics with larger groups for establishments including Geneva Baseball, The Geneva Park District, The Oswego Outlaws  and Elite Sports training. She is looking forward to bringing her expertise to the brand new facility that Bring It! Sports Academy has to offer.




Contact Info
Cell:     630-306-8176
Email:   Megan_stricker@yahoo.com`
    },
    {
        first_name: 'Luke', last_name: 'Stricker', images: [LukePortrait,BatImg,BatImg], color: 'blue',
        description:
            `Coach Luke Stricker has been a certified speed and agility instructor through Nesta since 2019. Luke grew up playing travel baseball and travel soccer from an early age where his love of sports developed. . He continued his sports career Playing both High School and College sports. He graduated with a degree in Biology with an emphasis on EMT certification, anatomy, and Speed and Agility.  


        Luke has been involved in training young athletes in many different sports including baseball, softball, soccer and Lacrosse. His focus now remains in teaching young athletes speed and agility , foot work , and correct muscle movement for hitting, throwing and fielding. Luke continues to stay up to date on the latest drills, and exercises available so he can pass that knowledge on to your young athletes. 
        
        A.C.E. Certified/ Safe Sport Certified
        



Contact Info
Cell:     630-303-8329
Email:   Luke.a.stricker@gmail.com`
    },{
        first_name: 'Kristin', last_name: 'McCue', images: [KristinClose, KristinPortait, KristinPortait], color: 'red',
        description:
            `Kristin is a former girls travel softball player of 10 years, primarily playing catcher and 3rd base throughout her career. She later went on to run collegiate cross country. Currently working as a registered dietitian, Kristin is focused on fundamentals and fueling young athletes. She is available for private and group lessons as well as clinics. `
    },
    // {
    //     first_name: 'Hunter', last_name: 'Siler', images: [HuntPortrait,BatImg,BatImg], color: 'red',
    //     description:
    //         `Hunter Siler grew up playing travel baseball and basketball. During high school he was a 3-sport athlete all 4 years of school. After competing in Track and Field events up through his college career he will now be graduating with a degree in Finance and a minor in Coaching and Youth Sport Development from Aurora University. 

    //         He has been a strength and agility coach since early on when he started Track & Field camps during his high school seasons for middle school athletes in the area. He has experience in baseball,football, and track and field throwing events. Hunter Siler will work with each athlete to ensure they are getting what they need case-by-case. `
    // },
    
    

    



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
                    <div className='close-button disable-select' onClick={() => handlePopup()} >CLOSE</div>

                </div>
            </div>
            <div className="Coaches">
                <h1>- Changing the game one player at a time -</h1>
                <div className='coach-container'>
                    {coaches.map((coach, index) => {
                        return (
                            <div className={`${coach.color === 'blue' ? 'coach-card card-2nd' : 'coach-card'}`} key={`coach${index}`}>

                                <h2 className='name'>COACH {coach.first_name.toUpperCase()}</h2>
                                <div className='img-div'>

                                    {coach.images.map((image, index) => {
                                        return (

                                            <div className={`img-overflow index${index} ${index == 0 && ` active`}`} key={`image${coach.first_name}${index}`}>

                                                <img src={image} alt={`${coach.first_name} ${index}`} />
                                            </div>
                                        )
                                    })}

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
                    <h1>- Jerry Rice -</h1>
                </div>
            </div>
        </>
    );
}

export default Coaches;
