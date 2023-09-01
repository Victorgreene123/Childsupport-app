










import React, { useEffect , useMemo, useRef,useState } from 'react';
import '../index.css';
import { MeetingProvider , MeetingConsumer, useMeeting, useParticipant} from "@videosdk.live/react-sdk"
import { getToken , createMeeting} from '../api';
import {Row , Col} from  'react-simple-flex-grid';
import ReactPlayer from 'react-player';
import MeetingGrid from './Meetingsdk';
import { Router , Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function MeetingPage(){
    const {meetingId,token} = useParams();
    return (
        <MeetingProvider 
     config={{
        meetingId,
        micEnabled:true,
        webcamEnabled : true,
        name : 'John Doe'
     }}
     token={token}
    
    >
        <MeetingConsumer>
        {() => <MeetingGrid meetingId = {meetingId} />}
        </MeetingConsumer>
    </MeetingProvider>
    )
}