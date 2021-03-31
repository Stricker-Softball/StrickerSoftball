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
        { name:'Stricker Softball Academy',file:sbllAcademy, url:'https://drive.google.com/file/d/14x_pOGtmrhgEooQtePSsIG6ph1FQj10i/view?usp=sharing'},
        {  name:'Softball Academy Memberships',file:sbllAcademyMemberships, url:'https://drive.google.com/file/d/1pcSqS4AziOgHuIJgq93nNVYPvUm8txDm/view?usp=sharing'},
        {  name:'Stricker Softball Academy AprilMay',file:sbllAprilMay, url:'https://drive.google.com/file/d/1svjs_YFO6VxSpAVnzoN2Jti0sYSHHk3D/view?usp=sharing'},
        {  name:'Stricker Softball Academy Summer',file:sbllSummer, url:'https://drive.google.com/file/d/1Fa1OiGzq21NCED3QBCwsqQruEHKYmVk-/view?usp=sharing'},
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
                    return (
                        <>
                        <div className='event-item' style={{paddingBottom:'0',overflow:'hidden',height:600}}>
                            {/* <embed src={item} width="100%" height="800px" /> */}
                            <object data={item.file} style={{width:"100%", height:"600px"}}>
                                <p>Oops! Your browser doesn't support PDFs!</p>
                                <p><a href={item.url}>Download Instead</a></p>
                            </object>
                            
                            {/* <MobilePDFReader url={item.url}/> */}
                        </div>
                        <a className='button-main pdf-link ' target="_blank" href={item.url}>{item.name} link</a>
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
            <EventsImage/>

            <p onClick={() => {
                window.scrollTo(0, 0)
                props.history.push('/admin/events/edit')
            }}>ed</p>
        </div>
    );
}

export default Events;