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
import ADS from './components/Ads/ImgList.js';
import AdminScreen from './components/Admin/AdminScreen.js';
let isOffline = false;


function App() {
  let defaultData = JSON.parse("{\"Switches\":{\"frontPageAds\":true},\"questions\":[],\"Clinics\":[],\"ClassRegistration\":[{\"buttons\":[{\"name\":\"Coach Megan's lessons\",\"link\":\"https://forms.gle/Sv8pmbjGg4pFvmzy5\",\"qr\":\"\"}],\"description\":\"\",\"id\":4},{\"buttons\":[{\"name\":\"Coach Sue Lessons\",\"link\":\"https://forms.gle/ebZd3q6c1JYZ6fq29\",\"qr\":\"\"}],\"description\":\"\",\"id\":1},{\"buttons\":[{\"name\":\"Fall 2024 Registration\",\"link\":\"https://forms.gle/ebZd3q6c1JYZ6fq29\",\"qr\":\"\"}],\"description\":\"\",\"id\":1},{\"buttons\":[{\"link\":\"https://drive.google.com/file/d/1ig9mxosUWAuSEHeKxI_NDgqYCUOPQ88K/view?usp=sharing\",\"name\":\"Liability Waiver\",\"qr\":\"\"}],\"description\":\"Download & Fill out Softball Science Waiver\",\"id\":2}],\"members\":[{\"name\":\"Monthly Memberships\",\"file\":\"https://drive.google.com/file/d/1R44bgTLfdLdOIUmtejEW2QN1PHP_w3qn/preview\",\"url\":\"https://drive.google.com/file/d/1R44bgTLfdLdOIUmtejEW2QN1PHP_w3qn/view\",\"id\":1},{\"name\":\"Fall 2023 Hitting Velocity Memberships\",\"file\":\"https://drive.google.com/file/d/1foIwXa0cCXC2P3JRyQOTaAQ3ffSNCEY0/preview\",\"url\":\"https://drive.google.com/file/d/1foIwXa0cCXC2P3JRyQOTaAQ3ffSNCEY0/view\",\"id\":2}],\"Teams\":[{\"name\":\"Team Pricing\",\"file\":\"https://drive.google.com/file/d/1keimBeNK2_CwZTk8F3GIux0DuaJ5kUkk/preview\",\"url\":\"https://drive.google.com/file/d/1keimBeNK2_CwZTk8F3GIux0DuaJ5kUkk/view\",\"id\":1}],\"Ads\":[{\"url\":\"https://drive.google.com/thumbnail?id=1lJFXh0kYH5Ws2EAgK9cIJxrDQ4Da-Ovk&sz=w1000\",\"id\":6},{\"url\":\"https://drive.google.com/thumbnail?id=14uoS_rHDEYNlzTwbzGe3n5xJwgHs5fVX&sz=w1000\",\"id\":5},{\"url\":\"https://drive.google.com/thumbnail?id=1pwK_pNCYrFYymuymkQurj00JnlAHy3wK&sz=w1000\",\"id\":4},{\"url\":\"https://drive.google.com/thumbnail?id=1-9KVrE2CqBurAsW35h2NEGQ2apQEm2cr&sz=w1000\",\"id\":3},{\"url\":\"https://drive.google.com/thumbnail?id=1UvbMuN66V_zWR3f5zsEVq4Mec1NIQwgs&sz=w1000\",\"id\":1},{\"url\":\"https://drive.google.com/thumbnail?id=17wteIJlGCPtL2pfX4kY0XsaouWWMk2D1&sz=w1000\",\"id\":2}],\"AdsRegister\":\"https://forms.gle/NabpjajRCTqJwrzc8\"}")
  const [events, setEvents] = useState([]);
  const [sectionListObject, setData] = useState({...defaultData})
 const history = useHistory();
    useEffect(() => {
      const fetchData = async () => {
        await axios(
          `https://softball-science-data.vercel.app/locker/4`,
        ).then(res => {
          let newData = JSON.parse(res.data.data[0].value)
          setData(newData);
        }).catch(err => {
          console.log(err)
          // alert('Something went wrong! could not Grab data!')
      })

          // console.log(result.data)
        // setData(result.data[0]);
      };
   
      if(!isOffline) fetchData();
    },[]);
// useEffect(() => {
//     window.addEventListener("beforeunload", alertUser);
//     return () => {
//       window.removeEventListener("beforeunload", alertUser);
//     };
//   }, []);
//   const alertUser = (e) => {
//      history.push("/");
//     window.location.href = window.location.origin
//     e.preventDefault();
   
//   };

  let imgCardList = [
    // https://drive.google.com/uc?export=view&id=
    // {  name:'',
    //       file:"https://drive.google.com/uc?export=view&id=16NMqrzub_A5sSqi1GVTDxxqXAaCKzTGc", 
    //       url:"https://drive.google.com/file/d/16NMqrzub_A5sSqi1GVTDxxqXAaCKzTGc/view"
    //   },
    
  ]


  return (
    <>
      <div id="SaveScreen"><span>Saving...</span></div>
      <div className="App">

        <div className='container'>
          <Route path="/" render={props => <Navbar {...props} sectionList={sectionListObject} />} />
          <div className='container-after'>
          <Route exact path="/" render={props => <ADS show={sectionListObject.Switches.frontPageAds} {...props} images={sectionListObject.Ads}/>} />
            <Route exact path="/" render={props => <Home {...props} />} />
            
            <Route path="/classes" render={props => <Events pageState='class' ClassRegistration={sectionListObject.ClassRegistration} key={1} {...props} eventList={events} sectionList={sectionListObject.Clinics} imgList={imgCardList}/>} />
            <Route path="/register" render={props => <Events pageState='register' ClassRegistration={sectionListObject.ClassRegistration} key={1} {...props} eventList={events} sectionList={sectionListObject.Clinics} imgList={imgCardList}/>} />
            <Route path="/questions" render={props => <Events pageState='class' ClassRegistration={[]} key={2}  {...props} eventList={events} sectionList={sectionListObject.questions}/>} />
            <Route path="/members" render={props => <Events pageState='class' ClassRegistration={[]} key={3}  {...props} eventList={events} sectionList={sectionListObject.members}/>} />
            <Route path="/teams" render={props => <Events pageState='class' ClassRegistration={[]} key={4}  {...props} eventList={events} sectionList={sectionListObject.Teams}/>} />
            <Route path="/meetthecoach" render={props => <Coaches {...props} />} /><Route path="/meetthecoach" render={props => <Lessons {...props} />} />
            <Route path="/contacts" render={props => <Contacts {...props}/>} />
            <Route path="/admin/events/edit" render={props => <AdminScreen {...props} setData={setData} eventList={events} allSections={sectionListObject}/>} />
            {/* <Route path="/admin/events/delete" render={props => <DeleteEvents {...props} eventList={events} />} /> */} 
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
