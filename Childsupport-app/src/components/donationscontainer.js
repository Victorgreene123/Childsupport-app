








import { Link } from 'react-router-dom';
import '../App';
import '../index.css'
import React from 'react';




export default function Donations(){
    return(
        <>
        <h2 className='page-heading'>Donations</h2>
        <div className='donations'>
        <div className='donation-request'>
        <img src='http://localhost:3000/images/profile.png' className='profilepic'></img>
        <p className='donation-text'>  John doe for a donation of a sum of <span className='donation-amount'>5000</span> USD to study in the university of toronto</p>
        <button className='donate-button'>Donate now!</button>
</div> 


        </div>
        
        
        
        
        
        
        
        </>



    )



}