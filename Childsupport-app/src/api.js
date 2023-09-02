









const API_BASE_URL = "https://api.videosdk.live";

const LOCAL_SERVER_URL = "http://localhost:5000"
export const getToken = async () => {
  try{
    const response = await fetch(`${LOCAL_SERVER_URL}/get-token`,{
      method:'GET',
      headers: {
        Accept:"application/json",
        "Content-Type":"application/json",
      },
    });
    const {token} = await response.json();
    return token;

  } catch (e){
    console.log(e);
  }
};

export const createMeeting = async ({ token },data) => {
      try{
        const main = {
           token:{token},
           title : data.title,
           description : data.description
        }
        const VIDEOSDK_API_ENDPOINT = `${LOCAL_SERVER_URL}/create-meeting`;
        const options ={
          method : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({main}),
            
          
        }
    
      const response = await fetch(VIDEOSDK_API_ENDPOINT,options)
        .then(async (result) =>{
           const {meetingId} = await result.json().result
           return meetingId;

        })
        .catch((error) => console.log('error', error));
        return response;
      }
      catch (e){
        console.log(e);
      }
};
