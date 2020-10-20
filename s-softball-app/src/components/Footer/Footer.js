import React from 'react';
import { NavLink } from "react-router-dom";
import './Footer.css';

import FacebookIcon from '../../images/social/facebook.png';
import instaIcon from '../../images/social/instagram.png';
import twitterIcon from '../../images/social/twitter.png';

function Footer() {
    return (
        <div className="Footer">
            <div className='footer-section'>
                <div className='sub-section subscribe'>
                    <div className='sub-container'>
                        <h4>Subscribe!</h4>
                        <div className='sub-input'>
                            <input />
                            <button>Sign Up</button>
                        </div>
                    </div>
                </div>
                <div className='sub-section info'>
                    <div className='sub-container'>
                        <p>Based out of <span>Geneva, IL</span> with lessons At <span>Bring It! Sports</span></p>
                        <span>303 N. 4th Street St. Charles</span>
                    </div>
                </div>
            </div>
            <div className='footer-section'>
                <div className='sub-section copyright'>
                    <div className='sub-container'>
                        <span>©2018 by Building 360 Performance</span></div>
                </div>
                <div className='sub-section social'>
                    <div className='sub-container'>
                        <div className='social-icons'>
                            <img src={FacebookIcon} alt='facebook' />
                            <img src={instaIcon} alt='instagram' />
                            <img src={twitterIcon} alt='twitter' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;