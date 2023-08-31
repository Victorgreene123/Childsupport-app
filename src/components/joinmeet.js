














import React, { useEffect , useMemo, useRef,useState } from 'react';
import '../index.css';
import { MeetingProvider , MeetingConsumer, useMeeting, useParticipant} from "@videosdk.live/react-sdk"
import { getToken , createMeeting} from '../api';
import {Row , Col} from  'react-simple-flex-grid';
import ReactPlayer from 'react-player';
import MeetingGrid from './Meetingsdk';
import { Router , Navigate } from 'react-router-dom';







export default function Join(props){
    const [token , setToken] = useState(null)
    const [meetingId , setMeetingId] = useState(props.meetingId);
function JoinScreen({updateMeetingId , getMeetingIdandtoken}){
    return (
        <div>
       
        <button onClick={getMeetingIdandtoken}>Join</button>
        

        </div>
    )
}
async function getMeetingIdandtoken (){
    const token = await getToken();
    setToken(token);
    setMeetingId(meetingId ? meetingId : (await createMeeting({token})));

}

 return token && meetingId ? (
   <Navigate to={`/meetings/${meetingId}/${token}`}/>
    // <MeetingProvider 
    //  config={{
    //     meetingId,
    //     micEnabled:true,
    //     webcamEnabled : true,
    //     name : 'John Doe'
    //  }}
    //  token={token}
    
    // >
    //     <MeetingConsumer>
    //     {() => <MeetingGrid meetingId = {meetingId} getMeetingIdandtoken = {getMeetingIdandtoken}/>}
    //     </MeetingConsumer>
    // </MeetingProvider>
) : (
    <JoinScreen  getMeetingIdandtoken={getMeetingIdandtoken} />
);

}