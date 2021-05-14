import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Events.scss';
import { MobilePDFReader,  PDFReader } from 'react-read-pdf';

import EventsImage from './EventsImage.js';

import sbllAcademyMemberships from '../../images/pdf/SoftballAcademyMemberships.pdf';
import sbllAcademy from '../../images/pdf/StrickerSoftballAcademy.pdf';
import sbllAprilMay from '../../images/pdf/StrickerSoftballAcademyAprilMay.pdf';
import sbllSummer from '../../images/pdf/StrickerSoftballAcademySummer.pdf';
// import bb from '../../../public/web/viewer.html'


function Events(props) {
    const [events, setEvents] = useState(props.eventList || []);
    const [eventImages, setEventImage] = useState([
        {  name:'Stricker Softball Academy June',
            file:<iframe src="https://drive.google.com/file/d/1DU65I6glpspxbAoAzQWf57k32GjqwDua/preview" width="640" height="480"></iframe>, 
            url:'https://drive.google.com/file/d/1DU65I6glpspxbAoAzQWf57k32GjqwDua/view'
        },
        {  name:'Softball Academy Memberships',
            file:<iframe src="https://drive.google.com/file/d/1pcSqS4AziOgHuIJgq93nNVYPvUm8txDm/preview" width="640" height="480"></iframe>, 
            url:'https://drive.google.com/file/d/1pcSqS4AziOgHuIJgq93nNVYPvUm8txDm/view'
        }, 
        {  name:'Stricker Softball Academy Summer',
            file:<iframe src="https://drive.google.com/file/d/1Fa1OiGzq21NCED3QBCwsqQruEHKYmVk-/preview" width="640" height="480"></iframe>, 
            url:'https://drive.google.com/file/d/1Fa1OiGzq21NCED3QBCwsqQruEHKYmVk-/view'
        }
        
    ])

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(
                'https://stricker-softball.herokuapp.com/api/events/'
            )
            setEvents(result.data);
        }
        fetchData();
    }, []);


    console.log(events)
    return (

        <div className='Events'>
            <h1>Academy</h1>
            <div className='event-list'>
                {eventImages.map((item) => {
                    // let itemURL = item.url.split("\"")[1]
                    // console.log(itemURL)
                    return (
                        <>
                        <div className='event-item' style={{paddingBottom:'0',overflow:'hidden'}}>
                            {item.file}
                            

                        </div>
                        {item.url && <a className=' pdf-link ' target="_blank" href={item.url}>{item.name} Page</a>}
                        </>
                    )
                })}

            
                {events.map((item) => {
                    return (
                        <div className='event-item'>
                            <h3>{item.title}</h3>
                            <div className='event-body'>{item.body}</div>
                        </div>)
                })}

                
            </div>
            {/* <EventsImage/> */}

            <p onClick={() => {
                window.scrollTo(0, 0)
                props.history.push('/admin/events/edit')
            }}>ed</p>
        </div>
    );
}

export default Events;