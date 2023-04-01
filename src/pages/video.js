import React, { useRef, useState } from 'react'
import "./video.css"
import VideoFooter from './components/footer/VideoFooter'
import VideoSidebar from './components/sidebar/VideoSidebar'

function Video({likes, messages, shares, name, description, music}) {
    const videoRef = useRef(null)
    const [play, setplay] = useState(false)


        function handdleStart(){
            if(play){
                videoRef.current.pause()
                setplay(false)

            } else{
                videoRef.current.play()
                setplay(true)

            }
        }

  return (
    <div className='video'>
        
            <video 
            className='video__player'
            ref={videoRef}
            onClick={handdleStart}
            loop
            src="https://firebasestorage.googleapis.com/v0/b/jornada3-a7924.appspot.com/o/brecker2.mp4?alt=media&token=5493f40a-3b0d-4c19-b5dd-a9016cc5a6d1"
        >

        </video>
    {/* side bar*/}
    <VideoSidebar
        likes={likes}
        messages={messages}
        shares={shares}
    />
    {/* footer*/}
    <VideoFooter />
        name={name}
        description={description}
        music={music}

    </div>
  )
}

export default Video