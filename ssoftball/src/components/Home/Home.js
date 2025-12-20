
import './Home.scss';

import EqupmentPile from '../../images/equipment-pile.jpg';
import MitGlove from '../../images/mit-glove.jpg';

import { Products } from '../Products/Products';
import { Partners } from '../Partners/Partners';
import  ImgList  from '../Ads/ImgList';
function Home(props) {
    // externalLink removed (unused)
    function buttonPress(link) {
        // if the link contains a hash (e.g. '/#product-features'),
        // navigate to path part and scroll to the element with that id
        const [pathPart, hash] = (link || '').split('#');
        const targetPath = pathPart || '/';

        if (hash) {
            // navigate to the path (if any)
            if (props.history && typeof props.history.push === 'function') {
                props.history.push(targetPath);
            } else {
                // fallback: set location (will reload if different origin)
                window.location.pathname = targetPath;
            }

            // attempt to find the element and scroll into view smoothly.
            // Repeat until the element exists (handles route change / render timing).
            const tryScroll = () => {
                const el = document.getElementById(hash);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                    setTimeout(tryScroll, 60);
                }
            };
            setTimeout(tryScroll, 60);
            return;
        }

        // default behavior: scroll to top then navigate
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        props.history.push(link);
    }
    return (
        <div className="Home">
            <div className='whole-section landing-section'>
                <div className='half-section'>
                    <p className='gradient-text hero-title'>Softball Science</p>
                    <h2>Coaching and Lessons for all Levels</h2>
                    <div className='buttons'>
                        <button className='button-main' onClick={() => buttonPress('/classes')}>Classes</button>
                        <button className='button-main' onClick={() => buttonPress('/register')}>Registration</button>
                        <button className='button-main' onClick={() => buttonPress('/meetthecoach')}>Coaches</button>
                        <button className='button-main' onClick={() => buttonPress('/#product-features')}>Books</button>
                    </div>
                </div>
                <div className='half-section'>
                    <div id="ssLogoDiv"></div>
                </div>
            </div>
            <ImgList {...props} />
            <div className="wave-section-top"></div>
            <div className="gradient-bg wave-section">
                <div className=" top-wave" aria-hidden>
                    <svg viewBox="0 0 1440 140" className="" preserveAspectRatio="none">
                    <path d="M0,80 C240,140 480,0 720,60 C960,120 1200,20 1440,80 L1440,140 L0,140 Z" />
                    </svg>
                </div>
            <div className='whole-section-half '>
                <div className='half-section'>
                    <div className='images' >
                        <img src={EqupmentPile} alt='equipment-pile' />
                        {/* <img src={MitGlove} alt='mit-glove' /> */}
                    </div>
                </div>
                <div className='half-section'>
                    <h3 className='gradient-text featured-title'>Who we are</h3>
                    <p className='science-paragraph'>
                    Softball Science was created by two women with a long, deep rooted history in the world of softball. 
                    We have used our combined expertise, that includes over 30 years of coaching experience along with
                    20 years of data analytics to create Softball Science. We have created a metrically driven program
                    specifically designed to enhance the raw power behind your softball swing.  </p>
                </div>
                
            </div>
            <div className='whole-section-half'>
                <div className='half-section'>
                    <h3 className='gradient-text featured-title'>Where you come in</h3>
                    <p className='science-paragraph'> All we need from you, 
                    is to bring the hard work and we will teach your body to supply the power! Our vision is to help 
                    guide softball players to believe in themselves and support them in every aspect of the game, 
                    both physically and mentally. 
                    We can't wait to help you unlock the strength you never knew you had! </p>
                </div>
                <div className='half-section'>
                    <div className='images' >
                        {/* <img src={EqupmentPile} alt='equipment-pile' /> */}
                        <img src={MitGlove} alt='mit-glove' />
                    </div>
                </div>
            </div>
            <div className="bottom-wave" aria-hidden>
                <svg viewBox="0 0 1440 140" className="" preserveAspectRatio="none">
                <path d="M0,80 C240,140 480,0 720,60 C960,120 1200,20 1440,80 L1440,140 L0,140 Z"  />
                </svg>
            </div>
            </div>
            <div className="wave-section-bottom"></div>
            <Products />
             <Partners />
        </div>
    );
}

export default Home;
