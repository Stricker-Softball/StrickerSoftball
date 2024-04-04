import React from 'react';
import './ImgList.scss';
import { useState } from 'react';


function ImgList(props) {
    function buttonPress(link) {
        window.scrollTo(0, 0)
        props.history.push(link)
    }

    return (<>
        <div className="imgList" >
             {props.images.map((image) => {
                console.log(image)
                return(<div className="adImageDiv">
                <img src={image} />
                </div>)
             })}
        </div>
        <div className="ad-link-div"><a class="ad-link button-main " target="_blank" href="https://forms.gle/NabpjajRCTqJwrzc8">Spring 2024 Registration</a></div>
        </>
    );
}

export default ImgList;