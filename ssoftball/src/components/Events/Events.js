import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Events.scss';

import SpringEvent from '../../images/pdf/SpringBreak2021FundamentalsCamps.jpg';
// import { Document, Page, pdfjs  } from 'react-pdf';


// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



function Events(props) {
    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(
                'https://stricker-softball.herokuapp.com/api/events/'
            )
            setEvents(result.data);
          }
          fetchData();
        }, []);
        

   
    // function onDocumentLoadSuccess({ numPages }) {
    //     console.log('-------------docuntment loaded!!!')
    //      setNumPages(numPages);
    // }
    console.log(events)
    return (
    //   <div className='Events'>
    //       <p> events</p>
    //     <Document
    //       file='./data/SpringBreak2021Fun_damentalsCamps.pdf'
    //       onLoadSuccess={onDocumentLoadSuccess.bind(this)} >
    //       <Page pageNumber={pageNumber} />
    //     </Document>
    //     <p>Page {pageNumber} of {numPages}</p>
    //   </div>
    <div className='Events'>
        <h1>Events</h1>
        
        <img src={SpringEvent} alt='springevent'/>
        
        <div className='event-list'>
            {events.map((item) =>{
                return (
                    <div className='event-item'>
                        <h3>{item.title}</h3>
                        <div className='event-body'>{item.body}</div>
                    </div>)
            })}
        </div>

        <p onClick={() =>{
        window.scrollTo(0,0)
        props.history.push('/admin/events/edit')   
        }}>ed</p>
    </div>
    );
}

export default Events;