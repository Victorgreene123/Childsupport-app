
























import React, { useEffect , useMemo, useRef,useState } from 'react';
import '../index.css';
import { MeetingProvider , MeetingConsumer, useMeeting, useParticipant} from "@videosdk.live/react-sdk"
import { getToken , createMeeting} from '../api';
import {Row , Col} from  'react-simple-flex-grid';
import ReactPlayer from 'react-player';
import MeetingGrid from './Meetingsdk';

import { Router , Navigate } from 'react-router-dom';





export default function Create(props){
    const [data,setData] = useState({
        title : props.title,
        description: props.description
    })
    console.log(data)
    const [token , setToken] = useState(null)
    const [meetingId , setMeetingId] = useState(null);
function JoinScreen({updateMeetingId , getMeetingIdandtoken}){
    return (
        <div>
       
        <button onClick={getMeetingIdandtoken}>Create</button>
        

        </div>
    )
}
async function getMeetingIdandtoken (){
    const token = await getToken();
    setToken(token);
    setMeetingId(meetingId ? meetingId : (await createMeeting({token} ,data)));

}

 return token && meetingId ? (
   <Navigate to={`/meetings/${meetingId}/${token}`}/>
    
   
) : (
    <JoinScreen  getMeetingIdandtoken={getMeetingIdandtoken} />
);

}