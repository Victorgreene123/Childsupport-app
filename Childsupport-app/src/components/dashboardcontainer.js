















import { Link } from 'react-router-dom';
import '../App';
import '../index.css'
import './dashboard.css'
import React from 'react';
import Statistics from './statistics';
import Sessionscontainer from './sessionscontainer';




export default function Dashboardcontainer(){

    return(
        <>
        <h2 className='page-heading'>Hi, Victor!</h2>
        <Statistics></Statistics>
<Sessionscontainer></Sessionscontainer>
        
        </>
    )
}