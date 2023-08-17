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


function Events(props, e) {
    const [events, setEvents] = useState(props.eventList || []);
    const [eventsGroup, setEGroup] = useState([{title:'Clinics'}]);
    eventsGroup[0].links = [
        {
            link:'https://docs.google.com/forms/d/e/1FAIpQLSdwHUuwZlNp1hWYEGPqPyT1xND-jpHbhXUicZuKzTau9Gxtzg/viewform?usp=sf_link',
            name:'Registration Form',
            description:'View and Register for  our Clinics',
        }
    ]
    if(!props.match.path.includes('clinic')){
        eventsGroup[0].links = []
    }
    if(props.match.path.includes('question')){
        eventsGroup[0].title = 'Questions & Answers'
    }else if(props.match.path.includes('member')){
        eventsGroup[0].title = 'Memberships'
    }

    eventsGroup[0].events = [
        {  name:'Monthly Memberships',
            file:"https://drive.google.com/file/d/1R44bgTLfdLdOIUmtejEW2QN1PHP_w3qn/preview", 
            url:"https://drive.google.com/file/d/1R44bgTLfdLdOIUmtejEW2QN1PHP_w3qn/view"
        },
        {  name:'Fall 2023 Softball Science Announcement',
        file:"https://drive.google.com/file/d/1dIXUG7pG--Lz9cw4-L5fnsNVaLr3M0WC/preview", 
        url:"https://drive.google.com/file/d/1dIXUG7pG--Lz9cw4-L5fnsNVaLr3M0WC/view"
    },
        {  name:'Questions',
            file:"https://drive.google.com/file/d/1lLEGRyXc0A-3n68ro6_cqgzSVKcH5cIK/preview", 
            url:"https://drive.google.com/file/d/1lLEGRyXc0A-3n68ro6_cqgzSVKcH5cIK/view"
        },
        // {  name:'Summer 2023 Hitting Velocity Camp ',
        //     file:"https://drive.google.com/file/d/1JaRKRYNrsMhFs_Z4oc1B_5Rm25getqKt/preview", 
        //     url:"https://drive.google.com/file/d/1JaRKRYNrsMhFs_Z4oc1B_5Rm25getqKt/view"
        // },
        // {  name:'2023 7 through 12 year olds',
        //     file:"https://drive.google.com/file/d/1Tcx-hmSiFMqD32PBaYYBKcqF_-U9q99T/preview", 
        //     url:"https://drive.google.com/file/d/1Tcx-hmSiFMqD32PBaYYBKcqF_-U9q99T/view"
        // },
//             {  name:'Summer 2023 Hitting Velocity Camp',
//             file:"https://drive.google.com/file/d/1kYz6yz6_-t0uWYJbhetrfF_cMTXff2Ot/preview", 
//             url:"https://drive.google.com/file/d/1kYz6yz6_-t0uWYJbhetrfF_cMTXff2Ot/view"
//         }
    ]
    if(props.sectionList && props.sectionList.length){
        eventsGroup[0].events = props.sectionList;
        // console.log(eventsGroup[0].events )
    }
    

    // useEffect(() => {
    //     async function fetchData() {
    //         const result = await axios.get(
    //             'https://stricker-softball.herokuapp.com/api/events/'
    //         )
    //         setEvents(result.data);
    //     }
    //     fetchData();
    // }, []);


//     console.log(eventsGroup)
    function PdfClick(link) {
        window.open(link, '_blank');
    }
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
                                <div key={item.name + 'link'} className='link-description' style={{paddingBottom:'0',overflow:'hidden'}}>
                                    {item.description}
                                    </div>
                                {item.link && <a key={item.name + 'a'} className='clinic-link pdf-link ' target="_blank" href={item.link}>{item.name}</a>}
                                
                                </>
                            )
                        })}
                        {group.events.map((item) => {
                            // console.log(item)
                            return (
                                <>
                                {item.url && <a key={item.name + 'tag'} className='event-link pdf-link ' target="_blank" href={item.url}>{item.name}</a>}
                                <div key={item.name} className='event-item' style={{paddingBottom:'0',overflow:'hidden'}} onClick={() => PdfClick(item.url)}>
                                    <iframe style={{background:'#000000'}} frameBorder="0" scrolling="no" allowtransparency="true" src={item.file} ></iframe>
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
