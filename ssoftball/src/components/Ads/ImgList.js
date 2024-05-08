import React from 'react';
import './ImgList.scss';
import { useState } from 'react';


function ImgList(props) {
    function buttonPress(link) {
        window.scrollTo(0, 0)
        props.history.push(link)
    }

    return (<>
        <div className={props.show?"imgList":"imgList hide"} >
             {props.images.map((image) => {
                
                return(<div className="adImageDiv">
                <img src={image.url.trim()} />
                </div>)
             })}
             {/* <div className="ad-link-div"><a class="ad-link button-main " target="_blank" href="https://forms.gle/uUdafApyuZAGbkhf8">Get Registered</a></div> */}
        </div>
        </>
    );
}

export default ImgList;