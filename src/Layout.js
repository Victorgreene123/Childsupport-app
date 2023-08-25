
import './App';
import './index.css'
import Navbar from './navbar'
import Footer from './footer'
import { Outlet,Link } from 'react-router-dom';
import React from 'react';
import Reports from './Reports';
// import { VideoSDKMeeting } from '@videosdk.live/rtc-js-prebuilt';
export default function Layout(){
    const name = 'victor'
  
    return(
        
        
          <>
          <Navbar />
                     <Outlet />
          <Footer />
          




          </>
        
        
    )
}