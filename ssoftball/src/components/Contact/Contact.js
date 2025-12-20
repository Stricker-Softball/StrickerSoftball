import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import {About} from '../About/About.js';


function Contact(props) {


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
    function handleLinkClick(link) {
        window.scrollTo(0,0)
        window.open(link, "_blank");
      }

    return (<>
        <div className="Contact" >
            <div className='contact-container bg-gradient-1 ' id='contact'>
                <h2>Contact Us</h2>
                <div className='contact-section'>
                    <div className='contact-info'>
                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon"/>
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
                        <FontAwesomeIcon icon={faPhone} className="contact-icon"/>
                        {/* <p className='label'>Call or Text:</p> */}
                        <input type="text" className='data' value='630-336-1553' readOnly={true} />
                    </div>
                    <div className='contact-info'>
                        <FontAwesomeIcon icon={faLocationDot} className="contact-icon"/>
                        {/* <p className='label'>Call or Text:</p> */}
                        <input type="text" className='data' value='303 N. 4th Street St. Charles' readOnly={true} />
                    </div>
                    
                </div>
                <h2 style={{marginBottom:'20px'}}>Follow or DM</h2>
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
        <About {...props} />
            </>
    );
}

export default Contact;