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
    eventsGroup[0].links = [
        {
            link:'https://docs.google.com/forms/d/e/1FAIpQLSdwHUuwZlNp1hWYEGPqPyT1xND-jpHbhXUicZuKzTau9Gxtzg/viewform?usp=sf_link',
            name:'Registration Form',
            description:'View and Register for  our Clinics',
        }
    ]
    eventsGroup[0].events = [

         {  name:'2023 Spring Group Brochure',
            file:"https://drive.google.com/file/d/1v8N-LtZ_P5L3HAXGfujwTpR4wHWbTRgb/preview", 
            url:"https://drive.google.com/file/d/1v8N-LtZ_P5L3HAXGfujwTpR4wHWbTRgb/view"
        },
        {  name:'2023 Spring Brochure 7-12 year olds',
            file:"https://drive.google.com/file/d/1Tcx-hmSiFMqD32PBaYYBKcqF_-U9q99T/preview", 
            url:"https://drive.google.com/file/d/1Tcx-hmSiFMqD32PBaYYBKcqF_-U9q99T/view"
        },
        // {  name:'Throwing And Fielding',
        //     file:"https://drive.google.com/file/d/1FIOmXoLk9SALT4bgF5lOa25m2M588fK4/preview", 
        //     url:"https://drive.google.com/file/d/1FIOmXoLk9SALT4bgF5lOa25m2M588fK4/view"
        // },
        // {  name:'Hitting Circuit',
        //     file:"https://drive.google.com/file/d/1KWB7zxwecwpI-VzHl_uPhikjL587fAGB/preview", 
        //     url:"https://drive.google.com/file/d/1KWB7zxwecwpI-VzHl_uPhikjL587fAGB/view"
        // },
        
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
                    // Pdf's
                    return (
                        <>
                        <h1>{group.title}</h1>
                        <div className='event-list'>
                        {group.links.map((item) => {
                            return (
                                <>
                                <div className='link-description' style={{paddingBottom:'0',overflow:'hidden'}}>
                                    {item.description}
                                    </div>
                                {item.link && <a className='clinic-link pdf-link ' target="_blank" href={item.link}>{item.name}</a>}
                                
                                </>
                            )
                        })}
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
