









import logo from './logo.svg';
import './App.css';
import React from 'react'
















import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import About from "./components/pages/About";
import ReportCase from "./components/pages/ReportCase";

import Dashboard from "./components/dashboard";
import Reports from "./components/Reports";
import Dashboardcontainer from "./components/dashboardcontainer";
import Profile from "./components/profilecontainer";
import Peers from "./components/peerscontainer";
import Mentors from "./components/mentorscontainer";
import Layout from "./components/Layout";
import Resources from './components/resourcescontainer';
import Meetings from './components/meetingscontainer';
import ProfilePage from './components/Profilepage';
import Donations from './components/donationscontainer';
import MyPeers from './components/mypeers';
import PeerRequests from './components/peerrequests';
import FindPeer from './components/findpeer';

import MeetingVideo from './components/Meetingsdk';
import MeetingPage from './components/meetingpage';
// import StyledVide?o from './meeting-app/videosdk-rtc-react-sdk-example/src/Videowithstyle';


function App() {
 
  return (
    <div className="App">
    <>
       <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
            <Route path="navbar" element={<Navbar />} />
            {/* <Route path='footer' element={<Footer />}/> */}
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="about" element={<About />} />
            <Route path="report-case" element={<ReportCase />} />
                <Route path='/meetings/:meetingId/:token' element={<MeetingPage />}/>
                {/* <Route path='styledvideo' element={<StyledVideo />}/> */}
                


               </Route>
 
           <Route path='/dashboard' element={<Dashboard />}>
        <Route index element={ <Dashboardcontainer />}/>
        {/* <Route path='/' element={ <Dashboardcontainer />} /> */}
        <Route path='Peers/mypeers' element = {<MyPeers />} />
        <Route path='Peers/requests' element = {<PeerRequests />} />
        <Route path='Peers/discover' element = {<FindPeer />} />

        <Route path='Reports' element={ <Reports />}/>
        <Route path='me' element={ <Profile />}/>
        <Route path='Donations' element={ <Donations />}/>
        <Route path='Peers' element={ <Peers />}> 
        </Route>
        <Route path='Resources' element={ <Resources />}/>
        <Route path='Mentors' element={ <Mentors />}/>
        <Route path='Meetings' element={ <Meetings />}/>
        <Route path='profile/:username' element={<ProfilePage />} />
            
            </Route>
        </Routes>
       </BrowserRouter>
       
       
       </>
    </div>
  );
}

export default App;
