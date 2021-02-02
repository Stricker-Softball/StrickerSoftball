import React, {useState, useEffect} from 'react';
import './Events.scss';

import SpringEvent from '../../images/pdf/SpringBreak2021FundamentalsCamps.jpg';
// import { Document, Page, pdfjs  } from 'react-pdf';


// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



function Events(props) {
    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);

    // useEffect(() => {
        
    // })
   
    // function onDocumentLoadSuccess({ numPages }) {
    //     console.log('-------------docuntment loaded!!!')
    //      setNumPages(numPages);
    // }
  
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
    </div>
    );
}

export default Events;