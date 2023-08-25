





import './App';
import './index.css'
import Navbar from './navbar'
import Footer from './footer'
import { Outlet,Link } from 'react-router-dom';
import React from 'react';
import Sidenav from './sidenav';
import Statistics from './statistics';
import Sessionscontainer from './sessionscontainer';

export default function Dashboard(){
return(
<>
<div className='container2'>
    <div className='general-row'>

<Sidenav></Sidenav>
<div className='right'>
    <div className='middle'>

<Outlet />

</div>
<div className='extra'>
<Link to='/dashboard/me'><img src='http://localhost:3000/images/profile.png' className='img'></img></Link>
<img src='http://localhost:3000/images/bell.svg'  className='img'></img>

    <img src='http://localhost:3000/images/emergency.png'  className='img'></img>
</div>

</div>

<Footer></Footer>
</div></div>
</>
)
}