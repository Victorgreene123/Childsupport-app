











import React, { useEffect , useMemo, useRef,useState } from 'react';
import { MeetingProvider , MeetingConsumer, useMeeting, useParticipant} from "@videosdk.live/react-sdk"
import { getToken , createMeeting} from '../api';
import {Row , Col} from  'react-simple-flex-grid';
import ReactPlayer from 'react-player';

const chunk = (arr) =>{
    const newArray = [];
    while (arr.length) newArray.push(arr.splice(0, 3))
    return newArray
}
export default function MeetingGrid(props){
    const [joined , setJoined] = useState(null)
    const {join , participants} = useMeeting({
        onMeetingJoined: () =>{
            setJoined("JOINED");
        },
        onMeetingLeft: () => {
            props.onMeetingLeave();
        }
    })
    function joinMeeting(){
        setJoined("JOINING");
        join();
    }
    return (
        <div className='meetingviewcontainer'>
                <h3>Meeting Id : {props.meetingId}</h3>
                {joined && joined == "JOINED" ? (
                    <div>
                        <Controls />
                        {[...participants.keys()].map((participantId) => {
                            return (
                                <ParticipantView 
                                    participantId = {participantId}
                                    key = {participantId}
                                
                                />
                            )
                        })}
                    </div>
                ) : joined && joined == "JOINING" ? (
                    <p>Joining the meeting ...</p>
                ): (
                    <button onClick={joinMeeting}>Join</button>
                )}
        </div>
    )
}
function ParticipantView(props){
  
        const micRef = useRef(null);
        const { webcamStream, micStream, webcamOn, micOn, isLocal, displayName } =
          useParticipant(props.participantId);
      
        const videoStream = useMemo(() => {
          if (webcamOn && webcamStream) {
            const mediaStream = new MediaStream();
            mediaStream.addTrack(webcamStream.track);
            return mediaStream;
          }
        }, [webcamStream, webcamOn]);
      
        useEffect(() => {
          if (micRef.current) {
            if (micOn && micStream) {
              const mediaStream = new MediaStream();
              mediaStream.addTrack(micStream.track);
      
              micRef.current.srcObject = mediaStream;
              micRef.current
                .play()
                .catch((error) =>
                  console.error("videoElem.current.play() failed", error)
                );
            } else {
              micRef.current.srcObject = null;
            }
          }
        }, [micStream, micOn]);
      
        return (
          <div>
            <p>
              Participant: {displayName} | Webcam: {webcamOn ? "ON" : "OFF"} | Mic:{" "}
              {micOn ? "ON" : "OFF"}
            </p>
            <audio ref={micRef} autoPlay playsInline muted={isLocal} />
            {webcamOn && (
              <ReactPlayer
                //
                playsinline // very very imp prop
                pip={false}
                light={false}
                controls={false}
                muted={true}
                playing={true}
                //
                url={videoStream}
                //
                height={"300px"}
               width={"300px"}
                onError={(err) => {
                  console.log(err, "participant video error");
                }}
              />
            )}
          </div>
        );
      }

function Controls(props){
    const {leave , toggleMic , toggleWebcam} = useMeeting();
    return (
        <div>
            <button onClick={() => leave()}>Leave</button>
            <button onClick={() => toggleWebcam()}>toggleWebcam</button>
            <button onClick={() => toggleMic()}>Leave</button>
        </div>
    );

}


function JoinScreen({updateMeetingId , getMeetingIdandtoken}){
    return (
        <div>
        <input type='hidden' placeholder='enter meeting id' onChange ={(e) => updateMeetingId} />
        <button onClick={getMeetingIdandtoken}>Join</button>
        <button onClick={getMeetingIdandtoken}>Create meeting</button>

        </div>
    )
}

 function MeetingVideo(){
    const [token , setToken] = useState(null)
    const [meetingId , setMeetingId] = useState(null);

    async function getMeetingIdandtoken (){
        const token = await getToken();
        setToken(token)
        setMeetingId(meetingId ? meetingId : (await createMeeting({token})));

    }
 function updateMeetingId (meetingId){
    setMeetingId(meetingId)
 }
    return token && meetingId ? (
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
            {() => <MeetingGrid meetingId = {meetingId} getMeetingIdandtoken = {getMeetingIdandtoken}/>}
            </MeetingConsumer>
        </MeetingProvider>
    ) : (
        <JoinScreen updateMeetingId={updateMeetingId} getMeetingIdandtoken={getMeetingIdandtoken} />
    );

}
