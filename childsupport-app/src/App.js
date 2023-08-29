import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import About from "./components/pages/About";
import Footer from "./components/Footer";

import Dashboard from './components/dashboard';
import Reports from './components/Reports';
import Dashboardcontainer from './components/dashboardcontainer';
import Profile from './components/profilecontainer';
import Peers from './components/peerscontainer';
import Mentors from './components/mentorscontainer';
import Layout from './components/Layout'


function App() {
  return (
    <>
      <Router>
        

    
        <Routes>
<Route path='/' element={<Layout />}>
                <Route path='navbar' element={<Navbar />}/>
                <Route path='footer' element={<Footer />}/>
                <Route index element={<Home />}/>
                <Route path='login' element={<Login />}/>
                <Route path='signup' element={<SignUp />}/>
                <Route path="about" Component={<About />} />
      

               </Route>
 
           <Route path='/dashboard' element={<Dashboard />}>
        <Route index element={ <Dashboardcontainer />}/>
        {/* <Route path='/' element={ <Dashboardcontainer />} /> */}

        <Route path='Reports' element={ <Reports />}/>
        <Route path='me' element={ <Profile />}/>
        <Route path='Scholarships' element={ <Profile />}/>
        <Route path='Peers' element={ <Peers />}/>
        <Route path='Resources' element={ <Profile />}/>
        <Route path='Mentors' element={ <Mentors />}/>
        <Route path='Meetings' element={ <Profile />}/>
            
            
            </Route>
          

    
          
        </Routes>

        <Footer />

      </Router>
    </>
  );
}

export default App;
