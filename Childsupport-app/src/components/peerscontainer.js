









import { Link } from 'react-router-dom';
import '../App';
import '../index.css'
import React from 'react';





export default function Peers(){
return (
        <> 
       
            <div className='peerscontainer'>
            <h2 className='page-heading'>Peers</h2>
                <hr></hr>
                <div className='section-boxes'>
                <Link to='mypeers' className='section-box-container'>
                <div className='section-box'> 
                 <img className='img-circle section-box-image' src='http://localhost:3000/images/peer.png'></img>
                 <h3>My Peers</h3>
                </div>
                </Link>
                <Link to='requests' className='section-box-container'>
                <div className='section-box'> 
                 <img className='img-circle section-box-image' src='http://localhost:3000/images/peer.png'></img>
                 <h3>Requests</h3>
                </div>
                </Link>
                <Link to='discover' className='section-box-container'>
                <div className='section-box'> 
                 <img className='img-circle section-box-image' src='http://localhost:3000/images/peer.png'></img>
                 <h3>Discover </h3>
                </div>
                </Link>



                </div>
                
                
            </div>

        </>

)

}