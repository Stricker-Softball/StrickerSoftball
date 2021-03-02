import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './EditEvents.scss';
import {useFormFields} from '../../../utilities/hooksFields.js';



function EditEvents(props) {
    // const [addedEvent, setAddedEvent] = useState({});
    // const [ title, setTitle] = useState('');
    // const [body, setBody] = useState('');
    const [fields, handleFieldChange] = useFormFields({
        title: '',
        body: ''
    });

    function validateForm() {
        return fields.title.length > 0 && fields.body.length > 0;
      }

    // useEffect(() => {
    //     async function fetchData() {
    //         const result = await axios(
    //             'https://stricker-softball.herokuapp.com/api/events/'
    //         )
    //         setEvents(result.data);
    //       }
    //       fetchData();
    //     }, []);

    async function handleSubmit(event){
        event.preventDefault();


        try {
        await axios.post(
                    'https://stricker-softball.herokuapp.com/api/events/', {title:fields.title, body:fields.body} /*token*/)
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(err => alert('failed to add event',err))
        console.log(fields)
        alert('Event Added!')
        // props.history.push('/events')
        } catch (e) {
        alert(e)
        console.log(e)
        }
    }
        
    return (

    <div className='EditEvents'>
        <h1>Add an Event</h1>
        <form onSubmit={handleSubmit}>

            <h4>Title</h4>
            <input 
                onChange={handleFieldChange} 
                name="title" type="text" 
                placeholder="Enter Title" 
                value={fields.title} 
            />
            
            <h4>Body</h4>
            <textarea 
                onChange={handleFieldChange} 
                name="body" type="text" 
                placeholder="Enter Text Body" 
                value={fields.body}
            />
            
            <button className='events-submit' type='submit' disabled={!validateForm()}>Submit</button>

        </form>
        {/* <div className='body-test'>{fields.body}</div> */}
        <button className='button-main delete-link' onClick={() => {
            window.scrollTo(0, 0)
            props.history.push('/admin/events/delete')
        }}>Delete Events</button>
    </div>
    );
}

export default EditEvents;