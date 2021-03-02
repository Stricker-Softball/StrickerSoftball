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

    async function submitDelete(id){
        async function fetchEvents() {
            const result = await axios(
                'https://stricker-softball.herokuapp.com/api/events/'
            )
            setEvents(result.data);
          }
        async function fetchData() {
            const result = await axios.delete(
                `https://stricker-softball.herokuapp.com/api/events/${id}`
            )
            console.log(result.data, id);
            fetchEvents();
          }
          fetchData();

    }
    
        
    return (

    <div className='delete-events'>
        <h1>Delete an Event</h1>
        <div className='events-list'>
            <div className='events-item'>
                <h3>Title</h3>
                <div className='id-section'>
                    <p>ID #</p>
                    <div></div>
                </div>
            </div>
            {events.map(item => {
                return (
                    <div className='events-item'>
                        <h3>{item.title}</h3>
                        <div className='id-section'>
                            <p>{item.id}</p>
                            <button className='delete-button' onClick={() => submitDelete(item.id)}>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>

        <button className='button-main edit-link' onClick={() => {
            window.scrollTo(0, 0)
            props.history.push('/admin/events/edit')
        }}>Edit Events</button>
        
    </div>
    );
}

export default DeleteEvents;