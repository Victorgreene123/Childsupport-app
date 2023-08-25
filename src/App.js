





import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useEffect,useState } from 'react';
import Navbar from './navbar'
import Footer from './footer'
import Layout from './Layout'
import Login from './login'
import Signup from './signup';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './home';
import Dashboard from './dashboard';
import Reports from './Reports';
import Dashboardcontainer from './dashboardcontainer';
import Profile from './profilecontainer';
import Peers from './peerscontainer';
import Mentors from './mentorscontainer';

function App() {
  React.useEffect(() => {
    fetch('http://localhost:8000/callApi')
    .then(res => res.text())
    .then(data => console.log(data))
  },[])
  return (
    <div className="App">
    <>
       <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='navbar' element={<Navbar />}/>
                <Route path='footer' element={<Footer />}/>
                <Route index element={<Home />}/>
                <Route path='login' element={<Login />}/>
                <Route path='signup' element={<Signup />}/>
                
      

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
       </BrowserRouter>
       
       
       </>
    </div>
  );
}

export default App;
