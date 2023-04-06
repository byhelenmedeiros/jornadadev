import React, { useEffect, useState } from 'react';
import './App.css';
import Video from "./pages/video";
import db from "./config/firebase"
import { collection, getDocs } from 'firebase/firestore/lite';


function App() {

    const [video, setVideos]= useState([])


    async function getVideos(){
      const videosCollection = collection( db, "videos")
      const videosSnapshot = await getDocs(videosCollection)
      const videosList = videosSnapshot.docs.maps((doc) => doc.data());
      setVideos(videosList)
    }

  useEffect(()=>{
    getVideos();

 },[])



    return (
      <div className="App">
        <div className='app__videos'>
        
        { video.map((item)=> {
          return(
              <Video 
          likes={item.likes}
          messages={item.messages}
          shares={item.shares}
          name={item.name}
          description= {item.description}
          music={item.music}
          url={item.url}
        />
          );

        })   }


       {/* <Video 
       likes={147}
       messages={63}
       shares={4}
       name="Helen"
       description="O gato zé"
       music="Cat music fun"
       /> */}
       
     

     
       </div>
    </div>
  );
}

export default App;
