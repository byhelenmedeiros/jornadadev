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
            <p>icon</p><p>numero</p>
        </div>
        <div className='videoSidebar__options'>
            <p>icon</p><p>numero</p>
        </div>
        <div className='videoSidebar__options'>
            <p>icon</p><p>numero</p>
        </div>
    </div>
  )
}

export default VideoSidebar