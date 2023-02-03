import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';

import About from './Components/About';
import { useEffect, useState} from 'react';
import axios from 'axios';
import Users from './Components/Users';

const APP = () => {

 const [users, Setusers] = useState([]);

   useEffect(async()=>{
    const response = await axios.get('https://api.github.com/users');//api call
    Setusers(response.data)
  
  },[])
  return (
    <>
    <Router>
      <Navbar />
      <div className='container'>
        <Users user={users} />
        <Routes>
        {/* <Route exact path="/about" Component={About} /> */}
        
        </Routes>
      </div>
    </Router>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <APP />,
  
)

export default APP;

