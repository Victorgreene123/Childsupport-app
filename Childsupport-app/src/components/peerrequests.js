











import { Link } from 'react-router-dom';
import '../App';
import '../index.css'
import React from 'react';

import Custombutton from './custombutton';


export default function PeerRequests(){
    return(
    
    <div className='peerrequest' >
    <h2 className='page-heading'>Requests (1)</h2>
    <hr></hr>
        <div className='requests'>
            <div className='request'>
            <div className='peer'>
         <Link to='/dashboard/profile/johndoe' className='profilelink'>
            <img src='http://localhost:3000/images/profile.png' className='profilepic'></img>
    
        <h4 className='peername'>John Doe </h4>
        </Link>    
     
        <Custombutton default ='Decline' other ='Accept'></Custombutton>

        
        </div>
            </div>
        </div>
    </div>)

}