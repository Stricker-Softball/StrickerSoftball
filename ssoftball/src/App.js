import React, { useState, useEffect } from 'react';
import './App.scss';
import { Route } from "react-router-dom";
import axios from 'axios';

import Navbar from './components/Navbar/Navbar.js'
import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer.js';
import Lessons from './components/Lessons/Lessons.js';
import Coaches from './components/Coaches/Coaches.js';
import Contacts from './components/Contact/Contact.js';
import Events from './components/Events/Events.js';
import EditEvents from './components/Events/EditEvents/EditEvents.js';
import DeleteEvents from './components/Events/EditEvents/DeleteEvents.js';

function App() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        'https://stricker-softball.herokuapp.com/api/events/'
      )
      setEvents(result.data);
    }
    fetchData();
  }, []);

  return (
    <>

      <div className="App">

        <div className='container'>
          <Route path="/" render={props => <Navbar {...props} />} />
          <div className='container-after'>
            <Route exact path="/" render={props => <Home {...props} />} />
            <Route path="/events" render={props => <Events {...props} eventList={events} />} />
            <Route path="/lessons" render={props => <Lessons {...props} />} />
            <Route path="/meetthecoach" render={props => <Coaches {...props} />} />
            <Route path="/lessons" render={() => <Contacts />} />
            <Route path="/contacts" render={() => <Contacts />} />
            <Route path="/admin/events/edit" render={props => <EditEvents {...props} />} />
            <Route path="/admin/events/delete" render={props => <DeleteEvents {...props} eventList={events} />} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
