import { Link } from 'react-router-dom';
import '../App';
import '../index.css'
import React from 'react';
import Statistics from './statistics';
import Sessionscontainer from './sessionscontainer';




export default function Dashboardcontainer(){

    return(
        <>
        <Statistics></Statistics>
<Sessionscontainer></Sessionscontainer>
        
        </>
    )
}
