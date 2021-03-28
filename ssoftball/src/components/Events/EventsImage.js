import React, {useState} from 'react';
import './EventsImage.scss';

import EqupmentPile from '../../images/equipment-pile.jpg';


function EventsImage(props) {
    const [imageObj, setImageObj] = useState({source: EqupmentPile, name:'Equipment Pile'})

    return (
        <div className="EventsImage">
            <h1>{imageObj.name}</h1>



        </div>
    );
}

export default EventsImage;