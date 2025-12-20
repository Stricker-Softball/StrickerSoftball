import React, { useEffect } from 'react';
import './ImgList.scss';
import defaultImg from '../../images/adExample.png';

// local fallback image used when an image fails to load
const DEFAULT_IMG = defaultImg;
function ImgList(props) {
    const { expandedSrc, setExpandedSrc } = props;

    useEffect(() => {
        if (!expandedSrc) return;
        const onKey = (e) => {
            if (e.key === 'Escape') setExpandedSrc(null);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [expandedSrc, setExpandedSrc]);

    function openExpanded(src) {
        setExpandedSrc(src);
    }

    // closeExpanded removed (not used) — use setExpandedSrc(null) directly where needed
    return (<>
    {props.images?.length?<>
    <p className='gradient-text featured-title'>Featured</p>
        <div className={props.show?"imgList":"imgList hide"} >
                         {props.images.map((image, i) => {
                                const src = (image.url || '').trim();
                                         return(
                                           <div className="adImageDiv" key={`img-${i}`}> 
                                             <div className="adImageInner" onClick={() => openExpanded(src || DEFAULT_IMG)} role="button" tabIndex={0} onKeyDown={(e)=>{ if(e.key==='Enter') openExpanded(src || DEFAULT_IMG)}}>
                                               <img
                                                 src={src || DEFAULT_IMG}
                                                 alt={image.name || ''}
                                                 onError={(e) => {
                                                     // guard to avoid infinite loop
                                                     if (!e.currentTarget.dataset.fallback) {
                                                       e.currentTarget.dataset.fallback = '1';
                                                       e.currentTarget.src = DEFAULT_IMG;
                                                     }
                                                 }}
                                               />
                                               <div className="overlay" aria-hidden>Expand</div>
                                             </div>
                                           </div>
                                         )
                         })}
             {/* <div className="ad-link-div"><a class="ad-link button-main " target="_blank" href="https://forms.gle/uUdafApyuZAGbkhf8">Get Registered</a></div> */}
        </div>
        </>:<></>}
    </>
    );
}

export default ImgList;