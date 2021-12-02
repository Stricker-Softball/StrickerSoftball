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
         
        {  name:'Throwing And Fielding',
            file:"https://drive.google.com/file/d/1FIOmXoLk9SALT4bgF5lOa25m2M588fK4/preview", 
            url:"https://drive.google.com/file/d/1FIOmXoLk9SALT4bgF5lOa25m2M588fK4/view"
        },
        {  name:'Hitting Circuit',
            file:"https://drive.google.com/file/d/1KWB7zxwecwpI-VzHl_uPhikjL587fAGB/preview", 
            url:"https://drive.google.com/file/d/1KWB7zxwecwpI-VzHl_uPhikjL587fAGB/view"
        },
        {  
            name:'WINTER 2022 CLINICS',
            file:"https://drive.google.com/file/d/1B2jQMaMJfAmyNW-shqfgXS0DT5ub_PBp/preview",
            url:'https://drive.google.com/file/d/1B2jQMaMJfAmyNW-shqfgXS0DT5ub_PBp/view'
        },
//         {  
//             name:'Clinic Scholarship',
//             file:"https://drive.google.com/file/d/1kNQ1oBlggKkTrHAWP8JuKnjVQor0Ot-P/preview",
//             url:'https://drive.google.com/file/d/1kNQ1oBlggKkTrHAWP8JuKnjVQor0Ot-P/view'
//         },
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
