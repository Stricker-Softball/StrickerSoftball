import React from 'react';
import './ImgList.scss';
function ImgList(props) {
    // buttonPress removed (not used)
    console.log('')

    return (<>
    {props.images?.length?<>
    <p className='gradient-text featured-title'>Featured</p>
        <div className={props.show?"imgList":"imgList hide"} >
             {props.images.map((image, i) => {
                
                     return(<div className="adImageDiv" key={`img-${i}`}> 
                     <img src={image.url.trim()} alt={image.name || ''} />
                     </div>)
             })}
             {/* <div className="ad-link-div"><a class="ad-link button-main " target="_blank" href="https://forms.gle/uUdafApyuZAGbkhf8">Get Registered</a></div> */}
        </div>
        </>:<></>}
    </>
    );
}

export default ImgList;