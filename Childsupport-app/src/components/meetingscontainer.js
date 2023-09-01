







import { Link, Navigate } from 'react-router-dom';
import '../App';
import '../index.css'
import React, { useState } from 'react';
import Join from './joinmeet';

import Create from './createmeeting';
import Meetinglist from './meetinglist';
import { createMeeting, getToken } from '../api';



export default function Meetings(){
    const [formData, setFormdata] = React.useState([{
      title:'',
      description:''
    }]);
  function handleChange(e,index,field) {
    const { name, value, checked, type } = e.target;
    setFormdata((prevState) => {
      const updated = [...prevState];
      updated[index] = {
        ...updated[index],
        [field]: value
      }

      return updated;
    });
    console.log(formData)
}
async function handleSubmit(e) {
  e.preventDefault();
    const data = {
      title : formData[0].title,
      description : formData[0].description
    }
    const token = await getToken();
    const {meetingId}= await createMeeting({token} ,data);



 
   const link =`${process.env.PUBLIC_URL}meetings/${meetingId}/${token}`
    window.location.href = link;
  
}



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
            <td> <Join meetingId = 'm9at-4rq2-wdec' /></td>
        </tr>

        <Meetinglist />
    </tbody>

</table>
<div className='create-meeting'>
<form className="form" onSubmit={handleSubmit}>
              {
                formData.map((item,index) =>(
                  <>
              <div className="form-input">
                <label>Title</label>
                <input
                  name="title"
                  placeholder="Enter the title of the meeting"
                  type="text"
                  onChange={(e) => handleChange(e,index,'title')}
                  value={item.title}
                />
                
              </div>
              <div className="form-input">
                <label>Description</label>
                <textarea
                  name="description"
                  type="text"
                  placeholder="What is it about ?"
                  onChange={(e) => handleChange(e,index,'description')}
                  value={item.description}
                />
                
              </div>
              <h1>{item.title}</h1>
              
               
               
              
              </>
              ))}
          <button>Create</button>
         </form>
           
            
    
</div>
</div>
</>
 )
    
}