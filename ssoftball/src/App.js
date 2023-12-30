import React, { useState, useEffect } from 'react';
import './App.scss';
import { Route, useHistory  } from "react-router-dom";
import axios from 'axios';

import Navbar from './components/Navbar/Navbar.js'
import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer.js';
import Lessons from './components/Lessons/Lessons.js';
import Coaches from './components/Coaches/Coaches.js';
import Contacts from './components/Contact/Contact.js';
import Events from './components/Events/Events.js';
import AdminScreen from './components/Admin/AdminScreen.js'

function App() {

  const [events, setEvents] = useState([]);
 const history = useHistory();
  // useEffect(() => {
  //   async function fetchData() {
  //     // const result = await axios.get(
  //     //   'https://stricker-softball.herokuapp.com/api/events/'
  //     // )
  //     // setEvents(result.data);
  //   }
  //   fetchData();
  // }, []);
useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);
  const alertUser = (e) => {
     history.push("/");
    e.preventDefault();
    e.returnValue = "";
   
  };

  let annonucementList = []
  let imgCardList = [
    // https://drive.google.com/uc?export=view&id=
    {  name:'',
          file:"https://drive.google.com/uc?export=view&id=16NMqrzub_A5sSqi1GVTDxxqXAaCKzTGc", 
          url:"https://drive.google.com/file/d/16NMqrzub_A5sSqi1GVTDxxqXAaCKzTGc/view"
      },
    
  ]
  let sectionListObject = {
    clinics:[
      {  name:'',
        file:"https://drive.google.com/file/d/1mRrTaWkuvZLNpaUJwLWemZ0RvDuUUeUw/preview", 
        url:"https://drive.google.com/file/d/1mRrTaWkuvZLNpaUJwLWemZ0RvDuUUeUw/view"
      },
            {  name:'',
        file:"https://drive.google.com/file/d/1s7ueZkS8YdJYB6eP4tmz_kMogFxQ0eHK/preview", 
        url:"https://drive.google.com/file/d/1s7ueZkS8YdJYB6eP4tmz_kMogFxQ0eHK/view"
      },
            {  name:'',
        file:"https://drive.google.com/file/d/1Gd-MqXe4vz-aXbg7EFZOJ9WzSuUsoELs/preview", 
        url:"https://drive.google.com/file/d/1Gd-MqXe4vz-aXbg7EFZOJ9WzSuUsoELs/view"
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
    teams:[
      {  name:'Team Pricing',
        file:"https://drive.google.com/file/d/1keimBeNK2_CwZTk8F3GIux0DuaJ5kUkk/preview", 
        url:"https://drive.google.com/file/d/1keimBeNK2_CwZTk8F3GIux0DuaJ5kUkk/view"
      },
    ]
  }


  return (
    <>

      <div className="App">

        <div className='container'>
          <Route path="/" render={props => <Navbar {...props} />} />
          <div className='container-after'>
            <Route exact path="/" render={props => <Home {...props} />} />
            <Route path="/clinics" render={props => <Events key={1} {...props} eventList={events} sectionList={sectionListObject.clinics} imgList={imgCardList}/>} />
            <Route path="/questions" render={props => <Events key={2}  {...props} eventList={events} sectionList={sectionListObject.questions}/>} />
            <Route path="/members" render={props => <Events key={3}  {...props} eventList={events} sectionList={sectionListObject.members}/>} />
            <Route path="/teams" render={props => <Events key={4}  {...props} eventList={events} sectionList={sectionListObject.teams}/>} />
            <Route path="/meetthecoach" render={props => <Coaches {...props} />} /><Route path="/meetthecoach" render={props => <Lessons {...props} />} />
            <Route path="/contacts" render={() => <Contacts />} />
            <Route path="/admin/events/edit" render={props => <AdminScreen {...props} eventList={events} allSections={sectionListObject}/>} />
            {/* <Route path="/admin/events/delete" render={props => <DeleteEvents {...props} eventList={events} />} /> */} 
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
