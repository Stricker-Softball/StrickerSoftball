import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Events.scss';
// import { Document, Page, pdfjs  } from 'react-pdf';


// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import sbllAcademyMemberships from '../../images/pdf/SoftballAcademyMemberships.pdf';
import sbllAcademy from '../../images/pdf/StrickerSoftballAcademy.pdf';
import sbllAprilMay from '../../images/pdf/StrickerSoftballAcademyAprilMay.pdf';
import sbllSummer from '../../images/pdf/StrickerSoftballAcademySummer.pdf';


function Events(props) {
    const [events, setEvents] = useState(props.eventList || []);
    const [eventImages, setEventImage] = useState([
        sbllAcademy,
        sbllAcademyMemberships,
        sbllAprilMay,
        sbllSummer
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
                        <div className='event-item' style={{paddingBottom:'0'}}>
                            {/* <embed src={item} width="100%" height="800px" /> */}
                            <object data={item} width="100%" height="800px">
                                <p>Oops! Your browser doesn't support PDFs!</p>
                                <p><a href={item}>Download Instead</a></p>
                            </object>
                        </div>
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

            <p onClick={() => {
                window.scrollTo(0, 0)
                props.history.push('/admin/events/edit')
            }}>ed</p>
        </div>
    );
}

export default Events;