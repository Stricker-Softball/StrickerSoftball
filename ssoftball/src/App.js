import React from 'react';
import './App.scss';
import { Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar.js'
import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer.js';
import Lessons from './components/Lessons/Lessons.js';
import Coaches from './components/Coaches/Coaches.js';
import Contacts from './components/Contact/Contact.js';
import Events from './components/Events/Events.js';

function App() {
  return (
    <>

      <div className="App">

        <div className='container'>
          <Route path="/" render={props => <Navbar {...props} />} />
          <div className='container-after'>
            <Route exact path="/" render={props => <Home {...props} />} />
            <Route path="/events" render={props => <Events {...props} />} />
            <Route path="/lessons" render={props => <Lessons {...props} />} />
            <Route path="/meetthecoach" render={props => <Coaches {...props} />} />
            <Route path="/lessons" render={() => <Contacts />} />
            <Route path="/contacts" render={() => <Contacts />} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
