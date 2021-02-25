import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './DeleteEvents.scss';
import {useFormFields} from '../../../utilities/hooksFields.js';



function DeleteEvents(props) {
    const [events, setEvents] = useState([]);
    const [fields, handleFieldChange] = useFormFields({
        title: '',
        body: ''
    });

    function validateForm() {
        return fields.title.length > 0 && fields.body.length > 0;
      }

    useEffect(() => {
        async function fetchData() {
            const result = await axios(
                'https://stricker-softball.herokuapp.com/api/events/'
            )
            setEvents(result.data);
          }
          fetchData();
        }, []);

    
        
    return (

    <div className='DeleteEvents'>
        <h1>Delete an Event</h1>
        <div className='events-list'>
            {events.map(item => {
                return (
                    <div clasName='events-item'>
                        <h3>{item.title}</h3>
                        <p>{item.id}</p>
                    </div>
                )
            })}
        </div>
        
    </div>
    );
}

export default DeleteEvents;