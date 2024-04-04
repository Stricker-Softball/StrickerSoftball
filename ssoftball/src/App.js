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
import AdminScreen from './components/Admin/AdminScreen.js'

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
  let annonucementList = []
  let imgCardList = [
    // https://drive.google.com/uc?export=view&id=
    {  name:'',
          file:"https://drive.google.com/uc?export=view&id=1ILCIuyVKDQhI31oJ3fvJv_q4ORw96181", 
          url:"https://drive.google.com/file/d/1ILCIuyVKDQhI31oJ3fvJv_q4ORw96181/view"
      },
      {  name:'',
          file:"https://drive.google.com/uc?export=view&id=1gnUIOSvwyU9h-Z0u5TCXGCFwP9jGMpUe", 
          url:"https://drive.google.com/file/d/1gnUIOSvwyU9h-Z0u5TCXGCFwP9jGMpUe/view"
      },
      {  name:'',
          file:"https://drive.google.com/uc?export=view&id=1IUrf2Q2SmzOi3ADIKBISgO9pgkLcqnmM", 
          url:"https://drive.google.com/file/d/1IUrf2Q2SmzOi3ADIKBISgO9pgkLcqnmM/view"
      },
    {  name:'',
          file:"https://drive.google.com/uc?export=view&id=1mJ3Y3WTe81k9rGS5Asl63y89lQF3as9j", 
          url:"https://drive.google.com/file/d/1mJ3Y3WTe81k9rGS5Asl63y89lQF3as9j/view"
      },
  ]
  let sectionListObject = {
    clinics:[
    // {  name:'',
    //     file:"https://drive.google.com/file/d/1h5fbzNDLwHNfIH7t2EqJWviLLVWo0zGA/preview", 
    //     url:"https://drive.google.com/file/d/1h5fbzNDLwHNfIH7t2EqJWviLLVWo0zGA/view"
    //   },https://drive.google.com/file/d/1gfGARrKiKz1ndGVrHXEktxEQKh-Hz7a2/view?usp=sharing
    // {  name:'Class Anouncement!',
    //     file:"https://drive.google.com/file/d/1cjZjzYTTnl0QhZYySQlKaTniGgyETBVv/preview", 
    //     url:"https://drive.google.com/file/d/1cjZjzYTTnl0QhZYySQlKaTniGgyETBVv/view"
    //   },
    
    // {  name:'Team Pricing',
    //     file:"https://drive.google.com/file/d/1gfGARrKiKz1ndGVrHXEktxEQKh-Hz7a2/preview", 
    //     url:"https://drive.google.com/file/d/1gfGARrKiKz1ndGVrHXEktxEQKh-Hz7a2/view"
    //   },
      // {  name:'Fall 2023 Softball Science Announcement',
      //   file:"https://drive.google.com/file/d/1dIXUG7pG--Lz9cw4-L5fnsNVaLr3M0WC/preview", 
      //   url:"https://drive.google.com/file/d/1dIXUG7pG--Lz9cw4-L5fnsNVaLr3M0WC/view"
      // },
      // {  name:'Payment',
      //   file:"https://drive.google.com/file/d/18Ue2gwMby56G07dKMmeqCVA_YhOmBpD7/preview", 
      //   url:"https://drive.google.com/file/d/18Ue2gwMby56G07dKMmeqCVA_YhOmBpD7/view"
      // },
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
        file:"https://drive.google.com/file/d/1gfGARrKiKz1ndGVrHXEktxEQKh-Hz7a2/preview", 
        url:"https://drive.google.com/file/d/1gfGARrKiKz1ndGVrHXEktxEQKh-Hz7a2/view"
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
            <Route path="/contacts" render={props => <Contacts {...props}/>} />
            {/* <Route path="/admin/events/edit" render={props => <AdminScreen {...props} eventList={events} allSections={sectionListObject}/>} /> */}
            {/* <Route path="/admin/events/delete" render={props => <DeleteEvents {...props} eventList={events} />} /> */} 
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
