






import { Link } from 'react-router-dom';
import './App';
import './index.css'
import React from 'react';
import Sectionlink from './sectionlink';

export default function Sidenav(){
return(
<div className='sidenav'>
  <div className='block1'>
  <ul className='sections'>
    <h3 className='section-heading'>NAVIGATION</h3>
    <Sectionlink ></Sectionlink>
    <h3 className='section-heading'>ACTIONS</h3>
 
    <a className='sections-link' id='settings'><span className='sectionlinkholder'>
        <img src='images/settings.png' className='sectionlinkicon'></img>
        <span className='sectionlinkname'>Settings</span>
        </span></a>
    
   
  </ul>
  </div>
  <div className='aside'>
  
     
     {/* <div className='profile'>
      
         <div className='pic'>
          <img src='images/children.png'  className='profilepic'></img>
         </div>
         <div className='details'>
           <h4 className='username'>Tim Jacky</h4>
           <p className='useremail'>victorokereafor888888888888@gmail.com</p>
         
       </div>
     </div> */}
   <a className='sections-link logout'> <span className='sectionlinkholder'>
        <img src='images/logout-1.png' className='sectionlinkicon'></img>
        <span className='sectionlinkname logoutname'> Log out </span></span></a>
 </div>
    
</div>

)
}
