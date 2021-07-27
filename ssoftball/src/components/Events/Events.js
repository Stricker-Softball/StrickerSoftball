import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Events.scss';
import { MobilePDFReader,  PDFReader } from 'react-read-pdf';

import EventsImage from './EventsImage.js';

import sbllAcademyMemberships from '../../images/pdf/SoftballAcademyMemberships.pdf';
import sbllAcademy from '../../images/pdf/StrickerSoftballAcademy.pdf';
import sbllAprilMay from '../../images/pdf/StrickerSoftballAcademyAprilMay.pdf';
import sbllSummer from '../../images/pdf/StrickerSoftballAcademySummer.pdf';
import sbll4th from  '../../images/pdf/StrickerSoftballAcademySummer.pdf';
// import bb from '../../../public/web/viewer.html'


function Events(props) {
    const [events, setEvents] = useState(props.eventList || []);
    const [eventsGroup, setEGroup] = useState([{title:'Clinics'}]);
    eventsGroup[0].events = [
        // {  name:'Academy June Through August',
        //     file:<iframe src="https://drive.google.com/file/d/1Zr22l0rjT1-aVodomwMGkb80RDTToRDw/preview" width="640" height="480"></iframe>, 
        //     url:'https://drive.google.com/file/d/1Zr22l0rjT1-aVodomwMGkb80RDTToRDw/view'
        // },
        // {  name:'Softball Academy Memberships',
        //     file:<iframe src="https://drive.google.com/file/d/1pcSqS4AziOgHuIJgq93nNVYPvUm8txDm/preview" width="640" height="480"></iframe>, 
        //     url:'https://drive.google.com/file/d/1pcSqS4AziOgHuIJgq93nNVYPvUm8txDm/view'
        // }, 
        // {  name:'Softball Academy Summer',
        //     file:<iframe src="https://drive.google.com/file/d/1Fa1OiGzq21NCED3QBCwsqQruEHKYmVk-/preview" width="640" height="480"></iframe>, 
        //     url:'https://drive.google.com/file/d/1Fa1OiGzq21NCED3QBCwsqQruEHKYmVk-/view'
        // },
        {  
            name:'Fall 2021 Announcements',
            file:"https://drive.google.com/file/d/1In1ZTB2mpDnf5WN1yG-U-fteVl04Vb32/preview",
            url:'https://drive.google.com/file/d/1In1ZTB2mpDnf5WN1yG-U-fteVl04Vb32/view'
        },
        {  
            name:'Group Hitting - Fall 2021',
            file:"https://drive.google.com/file/d/1PBstStvukTLeQwzeD3MAczmT-Ff4vDI1/preview",
            url:'https://drive.google.com/file/d/1PBstStvukTLeQwzeD3MAczmT-Ff4vDI1/view'
        },
        {  
            name:'Footwork & Speed and Agility - Fall 2021',
            file:"https://drive.google.com/file/d/1csjc2gw1W_gZuFrLL6SuA7qGJkIF1ZI7/preview",
            url:'https://drive.google.com/file/d/1csjc2gw1W_gZuFrLL6SuA7qGJkIF1ZI7/view'
        },
        
        {  
            name:'Clinic Scholarship',
            file:"https://drive.google.com/file/d/1kNQ1oBlggKkTrHAWP8JuKnjVQor0Ot-P/preview",
            url:'https://drive.google.com/file/d/1kNQ1oBlggKkTrHAWP8JuKnjVQor0Ot-P/view'
        },
    ]
    

    // useEffect(() => {
    //     async function fetchData() {
    //         const result = await axios.get(
    //             'https://stricker-softball.herokuapp.com/api/events/'
    //         )
    //         setEvents(result.data);
    //     }
    //     fetchData();
    // }, []);


    console.log(eventsGroup)
    return (

        <div className='Events'>
            
                {eventsGroup.map((group) => {
                    // console.log(group)
                    return (
                        <>
                        <h1>{group.title}</h1>
                        <div className='event-list'>
                        {group.events.map((item) => {
                            // console.log(item)
                            return (
                                <>
                                {item.url && <a className=' pdf-link ' target="_blank" href={item.url}>{item.name}</a>}
                                <div className='event-item' style={{paddingBottom:'0',overflow:'hidden'}}>
                                    <iframe frameborder="0" scrolling="no" allowtransparency="true" src={item.file} ></iframe>

                                    

                                </div>
                                
                                </>
                            )
                        })}
                        </div>
                        </>
                    )
                    
                })}

            
                {/* {events.map((item) => {
                    return (
                        <div className='event-item'>
                            <h3>{item.title}</h3>
                            <div className='event-body'>{item.body}</div>
                        </div>)
                })} */}

            <p onClick={() => {
                window.scrollTo(0, 0)
                props.history.push('/admin/events/edit')
            }}>ed</p>
        </div>
    );
}

export default Events;