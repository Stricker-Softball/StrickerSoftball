import React, {useState} from 'react';
import './EventsImage.scss';

import EqupmentPile from '../../images/equipment-pile.jpg';


function EventsImage(props) {
    const [imageObj, setImageObj] = useState({source: EqupmentPile, name:'Equipment Pile'})

    var img_ele = null,
    x_cursor = 0,
    y_cursor = 0,
    x_img_ele = 0,
    y_img_ele = 0;

    function zoom(zoomincrement) {
    img_ele = document.getElementById('drag-img');
    var pre_width = img_ele.getBoundingClientRect().width, pre_height = img_ele.getBoundingClientRect().height;
    img_ele.style.width = (pre_width * zoomincrement) + 'px';
    img_ele.style.height = (pre_height * zoomincrement) + 'px';
    img_ele = null;
    }

      
      function start_drag() {
        img_ele = document.getElementById('drag-img');
        x_img_ele = window.event.clientX - document.getElementById('drag-img').offsetLeft;
        y_img_ele = window.event.clientY - document.getElementById('drag-img').offsetTop;
      
      }
      
      function stop_drag() {
        img_ele = null;
      }
      
      function while_drag() {
        x_cursor = window.event.clientX;
        y_cursor = window.event.clientY;
        if (img_ele !== null) {
          img_ele.style.left = (x_cursor - x_img_ele) + 'px';
          img_ele.style.top = ( window.event.clientY - y_img_ele) + 'px';
      
            console.log(img_ele.style.left+' - '+img_ele.style.top);
      
        }
      }
      
    //   document.getElementById('drag-img').addEventListener('mousedown', start_drag);
    //   document.getElementById('container').addEventListener('mousemove', while_drag);
    //   document.getElementById('container').addEventListener('mouseup', stop_drag);

    return (
        <div className="EventsImage">
            <h1>{imageObj.name}</h1>
            <div className='imgContainer'
                onMouseMove={while_drag}
                onMouseUp={stop_drag}
            >
                <img
                onMouseDown={start_drag} 
                onDragStart="return false" 
                id="drag-img" 
                src={imageObj.source} />
            </div>
            <input onClick={() => zoom(0.5)} type="button" id="zoomout" class="zoomButton" value="Zoom out"/>
            <input onClick={() => zoom(1.5)} type="button" id="zoomin" class="zoomButton" value="Zoom in"/>
        </div>
    );
}

export default EventsImage;