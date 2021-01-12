import React from 'react';
import './App.scss';
import { Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar.js'
import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer.js';
import Lessons from './components/Lessons/Lessons.js';
import Coaches from './components/Coaches/Coaches.js';
import Contacts from './components/Contact/Contact.js';

function App() {
  return (
    <>

      <div className="App">
        {/* <Route path="/user/:id" render={props => <Users {...props} />} /> */}

        <div className='container'>
          <Navbar />
          <div className='container-after'>
            <Route exact path="/" render={props => <Home {...props} />} />
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
