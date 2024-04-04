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
    const [eventsGroup, setEGroup] = useState([{title:'Clinics, Classes & Camps'}]);
    eventsGroup[0].links = [
        {
            buttons: [{
                 link:'https://forms.gle/MyQocWS4Xn49293U7',
                name:'Clinic & Class Registration',
            },
                      {
                link:'https://forms.gle/WnQDvDoz1ZDuEjw47',
               name:'HS Hitting Registration',
           },
                   
            ],
            description:'Register for  our Clinics, Classes & Camps',
        },
        {
            buttons: [{
            link:'https://drive.google.com/file/d/1ig9mxosUWAuSEHeKxI_NDgqYCUOPQ88K/view?usp=sharing',
            name:'Liability Waiver',
        }],
            description:'Download & Fill out Softball Science Waiver',
        }
    ]
    eventsGroup[0].events = []
    if(!props.match.path.includes('clinic')){
        eventsGroup[0].links = []
    }
    if(props.match.path.includes('question')){
        eventsGroup[0].title = 'Questions & Answers'
    }else if(props.match.path.includes('teams')){
        eventsGroup[0].title = 'Teams'
    }else if(props.match.path.includes('class')){
        eventsGroup[0].title = 'Classes'
        eventsGroup[0].events = [
            {
                name:'Class Schedule',
                file:"https://drive.google.com/file/d/1HFpfZ5GhqVkYunBwSOm0ieihDwUMAyoy/preview", 
                url:"https://drive.google.com/file/d/1HFpfZ5GhqVkYunBwSOm0ieihDwUMAyoy/view"
            }
        ]
        eventsGroup[1] = {links: []};
        eventsGroup[1].title = 'Class Descriptions'
        eventsGroup[1].events = [
            {
                name:'Plyometric Open Gym',
                file:"https://drive.google.com/file/d/1OqyHhmU3KLGPsvLqWEMSJCgZRuoecZBR/preview", 
                url:"https://drive.google.com/file/d/1OqyHhmU3KLGPsvLqWEMSJCgZRuoecZBR/view"
            },
            {
                name:'Velocity Class',
                file:"https://drive.google.com/file/d/1y9Y5vw3FXhVscK4FuJKTuJVCXp9ULOIK/preview", 
                url:"https://drive.google.com/file/d/1y9Y5vw3FXhVscK4FuJKTuJVCXp9ULOIK/view"
            }
        ]
    }

    
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


    console.log(eventsGroup)
    function PdfClick(link) {
        window.open(link, '_blank');
    }
    return (

        <div className='Events'>
                
                {eventsGroup.map((group) => {
                    // Pdf's
                    return (
                        <>
                        
                        <div className='event-list'>
                        {group.links.map((item) => {
                            return (
                                <>
                                <div key={item.name + 'link'} className='link-description' style={{paddingBottom:'0',overflow:'hidden'}}>
                                    {item.description}
                                    </div>
                                         <div className="link-btn-group">
                                {item.buttons.map((button) => {
                                    return (
                                        <a key={button.name + 'a'} className='clinic-link pdf-link ' target="_blank" href={button.link}>{button.name}</a>
                                    )
                                }) }
                                 </div>
                                </>
                            )
                        })}
<h1 style={{paddingTop: '5px'}}>{group.title}</h1>
                       


                        {group.events.map((item) => {
                            console.log(item)
                            return (
                                <>
                                {item.name && item.name.length  ? <a key={item.name + 'tag'} className='event-link pdf-link ' target="_blank" href={item.url}>{item.name}</a>:<></>}
                                <div key={item.name} className='event-item' style={{paddingBottom:'0',overflow:'hidden'}} onClick={() => PdfClick(item.url)}>
                                    <iframe style={{background:'#000000'}} frameBorder="0" scrolling="no" allowtransparency="true" src={item.file} ></iframe>
                                </div>
                                </>
                            )
                        })}

                         {props.imgList && props.imgList.map((item) => {
                            // console.log(item)
                            return (
                                <>
                                {item.name && <a key={item.name + 'tag'} className='event-link pdf-link ' target="_blank" href={item.url}>{item.name}</a>}
                                <div key={item.name} className='event-item-img event-item' style={{paddingBottom:'0',overflow:'hidden'}} onClick={() => PdfClick(item.url)}>
                                    <img style={{background:'#000000'}}  src={item.file} />
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
