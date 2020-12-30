import React from 'react';
import './Contact.scss';
//630 3361553
//sftbllcoach@gmail.com


function Contact() {
    return (
        <div className="Contact">
            <div className='contact-container'>
            <h2>Contact Us</h2>
            <div className='contact-section'>
                <div className='contact-info'>
                    <p className='label'>Send an email:</p>
                    <p className='data'>sftbllcoach@gmail.com</p>
                </div>
                <div className='contact-info'>
                    <p className='label'>Call or Text:</p>
                    <p className='data'>630-336-1553</p>
                </div>
            </div>

        </div>
        </div>
    );
}

export default Contact;