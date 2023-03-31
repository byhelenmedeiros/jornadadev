import React from 'react'
import "./videoSidebar.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';

function VideoSidebar() {
  return (
    <div className='videoSidebar'>
        <div className='videoSidebar__options'>
            <FavoriteBorderIcon fontSize='large'/>
            <p>147</p>
        </div>
        <div className='videoSidebar__options'>
            <ChatIcon  fontSize='large'/>
            <p>82</p>
        </div>
        <div className='videoSidebar__options'>
            <ShareIcon  fontSize='large'/>
            <p>91</p>
        </div>
    </div>
  )
}

export default VideoSidebar