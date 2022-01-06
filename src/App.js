//Mannu dhummu keka dums mams keks mams

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import Dashboard from './Dashboard'
import Myprofile from './Myprofile'
import Contact from "./Contact"
import Splash from './Splash'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/register' exact element={<Register />} />

          <Route path='/dashboard' exact element={<Dashboard />} />
          <Route path='/myprofile' exact element={<Myprofile />} />
          <Route path='/contact' exact element={<Contact />} />
          {/* <Route path='/splash' exact element={<Splash />} /> */}

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
