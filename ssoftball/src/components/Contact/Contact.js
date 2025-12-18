import React from 'react';
import './Contact.scss';

import { useState } from 'react';
// import './Footer.scss';
//630 3361553
//sftbllcoach@gmail.com
import Modal from '../AdminLogin/AdminModal.js';


function Contact(props) {

    const [modalOn, setModalOn]= useState(false)
    function setShowModal(){
        let hasLoggedSession = sessionStorage.getItem("hasLoggedIn");
        if(hasLoggedSession && hasLoggedSession === "True"){
            buttonPress('/admin/events/edit')
        }
        setModalOn(!modalOn)
    }

    function myFunction() {
        var copyText = document.getElementById("mailInput");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");

        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copied: " + copyText.value;
        if (window.getSelection) { window.getSelection().removeAllRanges(); }
        else if (document.selection) { document.selection.empty(); }
    }

    function outFunc() {
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copy to clipboard";
    }
    function buttonPress(link) {
        window.scrollTo(0, 0)
        props.history.push(link)
    }

    function handleLinkClick(link) {
        window.scrollTo(0,0)
        window.open(link, "_blank");
      }

    return (<>
        <div className="Contact" >
            <div className='contact-container bg-gradient-1 ' id='contact'>
                <h2>Contact</h2>
                <div className='contact-section'>
                    <div className='contact-info'>
                        {/* <p className='label'>Send an email:</p> */}
                        <input type="text" className='data' id='mailInput' value='sftbllcoach@gmail.com' readOnly={true} />
                        <div className='mail-div'>
                            {/* <img src={mail} className='gitLogo mail' target="_blank" onClick={() => setMail(!showMail)} /> */}
                            <div className='mail-text'>

                                <div className="tooltip">
                                    <button onClick={myFunction} onMouseOut={outFunc}>
                                        <span className="tooltiptext" id="myTooltip">Copy to clipboard</span>
                                        Copy
                                    </button>
                                </div>

                            </div>
                            
                        </div>

                    </div>
                    <div className='contact-info'>
                        {/* <p className='label'>Call or Text:</p> */}
                        <input type="text" className='data' value='630-336-1553' readOnly={true} />
                    </div>
                    
                </div>
                <h2 style={{marginBottom:'20px'}}>Follow us</h2>
                <div className='social-icons'>
                            <div className='image facebook' 
                            onClick={() => handleLinkClick('https://www.facebook.com/sftbllcoach/')}>
                                <div></div></div>
                            <div className='image instagram'
                            onClick={() => handleLinkClick('https://www.instagram.com/sftbllcoach/')}>
                                <div></div></div>
                            <div className='image twitter'
                            onClick={() => handleLinkClick('https://www.twitter.com/SueStricker1/')}>
                                <div></div></div>
                        </div>

            </div>
            
        </div>
        <div id="adminButtonSection" onClick={() => setShowModal()}>
                Admin Log in
            </div>
            <Modal {...props} showModal={modalOn} setShowModal={setShowModal}/>
            </>
    );
}

export default Contact;