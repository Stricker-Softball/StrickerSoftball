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
      // const result = await axios.get(
      //   'https://stricker-softball.herokuapp.com/api/events/'
      // )
      // setEvents(result.data);
    }
    fetchData();
  }, []);
  let sectionListObject = {
    clinics:[
    // {  name:'',
    //     file:"https://drive.google.com/file/d/1h5fbzNDLwHNfIH7t2EqJWviLLVWo0zGA/preview", 
    //     url:"https://drive.google.com/file/d/1h5fbzNDLwHNfIH7t2EqJWviLLVWo0zGA/view"
    //   },https://drive.google.com/file/d/1gfGARrKiKz1ndGVrHXEktxEQKh-Hz7a2/view?usp=sharing
    {  name:'Payment',
        file:"https://drive.google.com/file/d/18Ue2gwMby56G07dKMmeqCVA_YhOmBpD7/preview", 
        url:"https://drive.google.com/file/d/18Ue2gwMby56G07dKMmeqCVA_YhOmBpD7/view"
      },
    {  name:'Team Pricing',
        file:"https://drive.google.com/file/d/1gfGARrKiKz1ndGVrHXEktxEQKh-Hz7a2/preview", 
        url:"https://drive.google.com/file/d/1gfGARrKiKz1ndGVrHXEktxEQKh-Hz7a2/view"
      },
      {  name:'Fall 2023 Softball Science Announcement',
        file:"https://drive.google.com/file/d/1dIXUG7pG--Lz9cw4-L5fnsNVaLr3M0WC/preview", 
        url:"https://drive.google.com/file/d/1dIXUG7pG--Lz9cw4-L5fnsNVaLr3M0WC/view"
      },
    ],
    questions:[
      {  name:'Questions',
          file:"https://drive.google.com/file/d/1lLEGRyXc0A-3n68ro6_cqgzSVKcH5cIK/preview", 
          url:"https://drive.google.com/file/d/1lLEGRyXc0A-3n68ro6_cqgzSVKcH5cIK/view"
      },
    ],
    members:[
      {  name:'Monthly Memberships',
          file:"https://drive.google.com/file/d/1R44bgTLfdLdOIUmtejEW2QN1PHP_w3qn/preview", 
          url:"https://drive.google.com/file/d/1R44bgTLfdLdOIUmtejEW2QN1PHP_w3qn/view"
      },
      {
        name:'Fall 2023 Hitting Velocity Memberships',
          file:"https://drive.google.com/file/d/1foIwXa0cCXC2P3JRyQOTaAQ3ffSNCEY0/preview", 
          url:"https://drive.google.com/file/d/1foIwXa0cCXC2P3JRyQOTaAQ3ffSNCEY0/view"
      }
    ],
    classes:[
    ]
  }


  return (
    <>

      <div className="App">

        <div className='container'>
          <Route path="/" render={props => <Navbar {...props} />} />
          <div className='container-after'>
            <Route exact path="/" render={props => <Home {...props} />} />
            <Route path="/clinics" render={props => <Events key={1} {...props} eventList={events} sectionList={sectionListObject.clinics}/>} />
            <Route path="/questions" render={props => <Events key={2}  {...props} eventList={events} sectionList={sectionListObject.questions}/>} />
            <Route path="/members" render={props => <Events key={3}  {...props} eventList={events} sectionList={sectionListObject.members}/>} />
            <Route path="/class" render={props => <Events key={3}  {...props} eventList={events} sectionList={sectionListObject.classes}/>} />
            <Route path="/meetthecoach" render={props => <Coaches {...props} />} /><Route path="/meetthecoach" render={props => <Lessons {...props} />} />
            <Route path="/lessons" render={() => <Contacts />} />
            <Route path="/contacts" render={() => <Contacts />} />
            {/* <Route path="/admin/events/edit" render={props => <EditEvents {...props} />} />
            <Route path="/admin/events/delete" render={props => <DeleteEvents {...props} eventList={events} />} /> */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
