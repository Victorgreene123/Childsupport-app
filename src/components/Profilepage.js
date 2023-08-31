











import React, {useEffect,useState} from 'react';
import  {useParams} from 'react-router-dom';
 export default function ProfilePage(){
    const {username} = useParams();
    const [userData, setUserData] = useState('');
    return (
        <>
        <div className='profile-container'>
        <div className='profilehead'>
            <div className='img-name'>
                <img  className='profilepic profilepic-big' src={`${process.env.PUBLIC_URL}images/profile.png`}></img>
                <h2 className='name'>{username}</h2>
            </div>
            
                
                <div className='peersandmentors'>
                <p className='followers'>7 <br></br><span className='profdetails'>Peers</span></p>
                    <p className='followers'>78 <br></br> <span className='profdetails'>Peers</span></p>
                    <p className='following'>34 <br></br><span className='profdetails'>Peers</span></p>
              </div>
              </div>
              <div className='profilebody'>
<p className='bio'>Bio</p>
              
        </div>

        </div>
        </>
    )
 }