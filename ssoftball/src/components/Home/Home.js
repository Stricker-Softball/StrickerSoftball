import React from 'react';
import './Home.scss';

import EqupmentPile from '../../images/equipment-pile.jpg';
import MitGlove from '../../images/mit-glove.jpg';
import Sillouete from '../../images/silouette-player.png';
function Home(props) {
    function externalLink(link){
        window.open(link, "_blank");
    }
    function buttonPress(link) {
        window.scrollTo(0, 0)
        props.history.push(link)
    }
    return (
        <div className="Home">
            {/* <div class="rollingContainer svgContainer">
                    <svg width="100%" height="300" viewBox="0 0 800 1000">
                        <g id="softballGroup2">
                        <circle cx="200" cy="200" r="150" fill="yellow" stroke="#FF0082" stroke-width="10" />
                        <path d="M90,95 Q200,135 90,310" fill="none" stroke="#FF0082" stroke-dasharray="15 15" stroke-width="10" />
                        <path d="M310,95 Q200,135 310,310" fill="none" stroke="#FF0082" stroke-dasharray="15 15" stroke-width="10" />
                        </g>
                    </svg>
                </div> */}
            <div id="ssLogoDiv"></div>
            
            {/* <div class="svgBar">
                <div class="dnaContainer svgContainer">
                    <svg fill="#FF0082" height="100px" width="100px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 511.999 511.999" stroke="#000000">
                        <g id="dnaGroup">
                            <g>
                                <path d="M506.231,132.672c-7.688-7.689-20.157-7.69-27.849-0.001c-26.971,26.971-81.458,26.26-119.149,20.095
                                    c-2.708-16.561-4.355-36.332-3.079-55.586l30.692,30.691c1.145,1.145,2.669,1.835,4.286,1.915
                                    c12.058,0.592,25.012,0.217,36.898-1.889c5.204-0.922,7.177-7.362,3.441-11.1L366.665,51.99
                                    c3.302-6.936,7.463-13.173,12.665-18.373c7.691-7.691,7.691-20.158,0-27.849c-7.689-7.69-20.158-7.69-27.849,0
                                    c-33.892,33.89-39.264,92.231-33.357,139.777c-48.006-5.627-105.179-1.239-139.499,33.079
                                    c-34.333,34.332-38.711,91.477-33.078,139.517c-47.448-5.847-105.971-0.47-139.779,33.339c-7.69,7.689-7.69,20.158,0,27.849
                                    c7.688,7.69,20.157,7.69,27.849,0c5.204-5.204,11.439-9.367,18.37-12.669l64.769,64.769c3.71,3.71,10.114,1.795,11.08-3.363
                                    c1.936-10.333,2.813-22.646,2.169-36.684c-0.075-1.627-0.769-3.17-1.921-4.322l-30.91-30.91
                                    c19.334-1.279,39.169,0.39,55.707,3.102c5.306,31.63,8.262,90.656-20.212,119.129c-7.69,7.689-7.69,20.158,0,27.849
                                    c7.69,7.692,20.158,7.69,27.849,0c34.052-34.051,39.176-92.539,33.394-139.492c47.65,5.762,106.123-0.026,139.462-33.364
                                    c38.189-38.187,37.438-102.472,33.061-139.653c43.54,5.157,104.524,2.068,139.796-33.204
                                    C513.922,152.83,513.922,140.362,506.231,132.672z M305.526,305.528c-26.971,26.971-81.459,26.259-119.149,20.095
                                    c-2.708-16.559-4.355-36.331-3.079-55.586l30.69,30.69c1.146,1.145,2.67,1.835,4.289,1.915c12.19,0.597,25.089,0.203,36.896-1.889
                                    c5.204-0.922,7.177-7.362,3.441-11.099l-64.807-64.807c6.899-14.494,16.53-24.132,31.036-31.042l64.761,64.76
                                    c3.738,3.738,10.168,1.763,11.101-3.441c2.146-11.973,2.531-24.698,1.936-36.846c-0.079-1.617-0.769-3.143-1.915-4.289
                                    l-30.696-30.696c19.268-1.275,39.047,0.378,55.591,3.084C331.795,224.132,332.457,278.596,305.526,305.528z"/>
                            </g>
                        </g>
                    </svg>
                </div>
                <div class="beakerContainer svgContainer">
                    <svg fill="#FF0082" height="100px" width="100px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 512 512" stroke="#000000">
                        <g id="beakerGroup">
                            <g>
                                <path d="M352.213,170.188V39.385h15.369c10.875,0,19.692-8.817,19.692-19.692C387.274,8.817,378.457,0,367.582,0
                                    c-5.156,0-208.595,0-223.043,0c-10.875,0-19.692,8.817-19.692,19.692c0,10.875,8.817,19.692,19.692,19.692h15.369
                                    c0,13.039,0,116.914,0,130.804C3.377,266.065,69.779,512,256.06,512C440.663,512,509.517,266.538,352.213,170.188z
                                    M208.937,394.321c-9.426,0-17.068-7.642-17.068-17.068c0-9.427,7.642-17.068,17.068-17.068s17.068,7.642,17.068,17.068
                                    S218.363,394.321,208.937,394.321z M287.13,410.374c-18.293,0-33.123-14.83-33.123-33.123s14.83-33.123,33.123-33.123
                                    c18.293,0,33.123,14.83,33.123,33.123C320.253,395.546,305.425,410.374,287.13,410.374z M126.658,262.038
                                    c13.56-26.66,35.277-48.894,62.091-62.959c6.483-3.4,10.545-10.118,10.545-17.438v-24.956h26.134
                                    c10.875,0,19.692-8.817,19.692-19.692c0-10.875-8.817-19.692-19.692-19.692h-26.134V98.035h26.134
                                    c10.875,0,19.692-8.817,19.692-19.692c0-10.875-8.817-19.692-19.692-19.692h-26.134V39.385h113.533V181.64
                                    c0,7.322,4.062,14.038,10.545,17.438c26.815,14.066,48.531,36.3,62.091,62.959H126.658z"/>
                            </g>
                        </g>
                    </svg>
                </div>
                
                
            </div> */}
            {/* <h2 style={{color:'var(--black)'}}>Announcements</h2> */}
            {/* <div id="announcementDiv">
                <iframe src="https://drive.google.com/file/d/1y3XQ461f29FZG2ceD0Kai1cb2ibciMDB/preview" frameBorder="0" scrolling="no" allowtransparency="true" />
            </div> */}
            <h2>Coaching and lessons for all levels</h2>
            <div className='buttons'>
                <button className='button-main' onClick={() => buttonPress('/clinics')}>Classes & Clinics</button>
                <button className='button-main' onClick={() => buttonPress('/meetthecoach#lessonsintro')}>Lessons</button>
            </div>
            
            <div className='buttons-bottom'>
                <button className='button-main' onClick={() => buttonPress('/meetthecoach')}> Coaches</button>
            </div>
            <p className='science-paragraph'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Softball Science was created by two women with a long history in the world of softball and life. 
            We have used our combined expertise, that includes over 30 years of coaching experience along with
             20 years of data analytics to create Softball Science. We have created a metrically driven program
              specifically designed to enhance the raw power behind your softball swing. All we need from you, 
              is to bring the hard work and we will teach your body to supply the power! Our vision is to help 
              guide softball players to believe in themselves and support them in every aspect of the game, 
              both physically and mentally. 
              We can't wait to help you unlock the strength you never knew you had! </p>
            <div className='images' >
                <img src={EqupmentPile} alt='equipment-pile' />
                <img src={MitGlove} alt='mit-glove' />
            </div>
            <h2>Take a look at our Clinics</h2>
            <img className='sillouete' src={Sillouete} alt='sillouete' />
            <div id="associateSection">
                <div id="associateLabel"><span>Associated</span><span>sites</span></div>
                <div id="assocateLinks">
                    <span id="associateBringIt" onClick={() => externalLink('https://www.bringitsportsacademy.com/')}></span>
                </div>
            </div>
        </div>
    );
}

export default Home;
