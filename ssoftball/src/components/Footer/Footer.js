import React from 'react';
import './Footer.scss';
import ssLogo from '../../images/ssLogo.png';

import Share from '../Share/Share.js';
import AdminLoginBtn from '../AdminLogin/AdminLoginBtn.js';

function Footer(props) {

    function handleLinkClick(link) {
        window.scrollTo(0,0)
        window.open(link, "_blank");
      }

    return (
        <div className="Footer">
            <div className='footer-section'>
                {/* <div className='sub-section subscribe'>
                    <div className='sub-container'>
                        <h4>Subscribe!</h4>
                        <div className='sub-input'>
                            <input />
                            <button className='button-main'>Sign Up</button>
                        </div>
                    </div> */
                /* </div> */}
                <div className='footerLogo'>
                <img src={ssLogo} alt='logo' />
                </div>
                <div className='sub-section copyright'>
                    <div className='sub-container'>
                        <span>© 2020 - {new Date().getFullYear()} &nbsp; &nbsp; Softball Science. All right Reserved.</span></div>
                </div>
            </div>
            <div className='footer-section'>
                
                <div className='sub-section info'>
                    <div className='sub-container'>
                        <p>Based out of <span>Geneva, IL</span> with lessons at <span>Bring It! Sports</span></p>
                        <span>303 N. 4th Street St. Charles</span>
                    </div>
                </div>
                <div className='sub-section social'>
                    <div className='sub-container'>
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
                            {/* <img src={FacebookIcon} alt='facebook' />
                            <img src={instaIcon} alt='instagram' />
                            <img src={twitterIcon} alt='twitter' /> */}
                        </div>
                    </div>
                </div>
            </div>
            <Share />
            <small className='footer-small'>
                Website created by <a href="https://strickerdigital.com" target="_blank" rel="noreferrer noopener">
                Stricker Digital
                </a>
            </small>
            <AdminLoginBtn {...props} />
        </div>
    );
}

export default Footer;