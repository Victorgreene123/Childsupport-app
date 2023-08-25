









import { Link } from 'react-router-dom';
import '../App';
import '../index.css'
import React from 'react';
import Custombutton from '../custombutton';




export default function Peers(){
return (
        <>
            <div className='peerscontainer'>
                <h2 className='page-heading'>Peers</h2>
                <div className='mentors'>

                <div className='peer'>
                    <img src='http://localhost:3000/images/profile.png' className='profilepic'></img>
                    <div className='peer-text-details'>
                    <h4 className='peername'>John Doe </h4>
                    <Custombutton default ='Remove Peer' other ='Add Peer'></Custombutton>

                    </div>
                </div>

                <div className='peer'>
                    <img src='http://localhost:3000/images/profile.png' className='profilepic'></img>
                    <div className='peer-text-details'>
                    <h4 className='peername'>John Doe</h4>
                    <Custombutton default ='Remove Peer' other ='Add Peer'></Custombutton>

                    </div>
                </div>
            </div></div>

        </>

)

}
