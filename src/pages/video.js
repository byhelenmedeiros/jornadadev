import React from 'react'
import "./video.css"

function Video() {
  return (
    <div className='video'>
        Aqui tem um Componente de video
            <video className='video__player'
            src='https://v16-webapp-prime.tiktok.com/video/tos/useast2a/tos-useast2a-ve-0068c002/de285be3800d48569b155a13f8b96ef7/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=5226&bt=2613&cs=0&ds=3&ft=_RwJrBElq8ZmoFKVCc_vjFVUKAhLrus&mime_type=video_mp4&qs=0&rc=PDVoaGRmZmQ6NTdnNzM5OkBpMzt3bDs6ZnE0ZzMzNzczM0BjNGEwNDBfX2IxNi8wYWMtYSNncTUzcjRfLzFgLS1kMTZzcw%3D%3D&btag=80000&expire=1680220968&l=20230330180235846B0EAC5FD95E454CA3&ply_type=2&policy=2&signature=caa9ecc7d651c8e6a2d670029a742ccf&tk=tt_chain_token'
        >

        </video>
    </div>
  )
}

export default Video