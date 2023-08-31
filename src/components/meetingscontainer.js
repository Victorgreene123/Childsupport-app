







import { Link } from 'react-router-dom';
import '../App';
import '../index.css'
import React from 'react';
import Join from './joinmeet';

import Create from './createmeeting';
import Meetinglist from './meetinglist';



export default function Meetings(){
    
 return(
<>
<h2 className='page-heading'>Meetings</h2>
<div className='sessionsavailable-container'>
<h5 className='statname'> <span className='bullet'>&#9702;</span>Available Therapy Sessions</h5>
<table className='sessions-table'>
    
    <tbody className='sessions-table-body'>
        <tr>
            <td>Building your confidence</td>
            <td>John Doe</td>
            
            <td className='Live'>LIVE</td>
            <td> <Join meetingId = 'rtgp-mx2r-a0te' /></td>
        </tr>

        <Meetinglist />
    </tbody>

</table>
<div className='create-meeting'>
    <Create />
</div>
</div>
</>
 )
    
}