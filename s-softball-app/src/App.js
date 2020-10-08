import React from 'react';
import './App.css';
import { Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar.js'
import Home from './components/Home/Home.js';

function App() {
  return (
    <>

      <div className="App">
        {/* <Route path="/user/:id" render={props => <Users {...props} />} /> */}
        <Navbar />
        <div className='container'>
          <Route exact path="/" render={props => <Home {...props} />} />

        </div>
      </div>
    </>
  );
}

export default App;
