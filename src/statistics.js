






import { Link } from 'react-router-dom';
import './App';
import './index.css'
import React from 'react';
import Sectionlink from './sectionlink';

export default function Statistics(){
return(
<>
<div className='statscontainer'>
    <div className='stat'>
        <h5 className='statname'> <span className='bullet'>&#9702;</span>Meetings</h5>
    <div className='general-row'>
        <div className='stat-division-1'>
     <h5  className='division-title'>Meetings Attended</h5>
     <h4 className='stat-value'>50</h4>
     </div>
     <div className='stat-division-2'>
     <h5 className='division-title'>Meetings Hosted</h5>
     <h4 className='stat-value'>12</h4>
     </div>
     
     
     </div>
    </div>
    <div className='stat'>
        <h5 className='statname'> <span className='bullet'>&#9702;</span>Reports</h5>
    <div className='general-row'>
        <div className='stat-division-1'>
     <h5  className='division-title'>Reports submitted</h5>
     <h4 className='stat-value'>50</h4>
     </div>
     <div className='stat-division-2'>
     </div>

     
     
     
     </div>
    </div>
    <div className='stat'>
        <h5 className='statname'> <span className='bullet'>&#9702;</span>Reports</h5>
    <div className='general-row'>
        <div className='stat-division-1'>
     <h5  className='division-title'>Reports submitted</h5>
     <h4 className='stat-value'>50</h4>
     </div>
     <div className='stat-division-2'>
     </div>

     
     
     
     </div>
    </div>
</div>

</>

)
}