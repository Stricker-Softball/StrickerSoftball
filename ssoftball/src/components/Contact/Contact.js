import React from 'react';
import './Contact.scss';
import mail from '../../images/social/mail-100.png'
import { useState } from 'react';
//630 3361553
//sftbllcoach@gmail.com


function Contact() {

    const [showMail, setMail] = useState(false)

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

    return (
        <div className="Contact" >
            <div className='contact-container' id='contact'>
                <h2>Contact Us</h2>
                <div className='contact-section'>
                    <div className='contact-info'>
                        <p className='label'>Send an email:</p>
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
                        <p className='label'>Call or Text:</p>
                        <input type="text" className='data' value='630-336-1553' readOnly={true} />
                    </div>
                </div>

            </div>
            <div id="adminButtonSection">
                Admin Log in
            </div>
        </div>
    );
}

export default Contact;