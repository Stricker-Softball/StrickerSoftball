import React from 'react';
import './ImgList.scss';
import { useState } from 'react';


function ImgList(props) {

    return (
        <div className="imgList" >
             {props.images.map((image) => {
                console.log(image)
                return(<div className="adImageDiv">
                <img src={image} />
                </div>)
             })}
        </div>
    );
}

export default ImgList;