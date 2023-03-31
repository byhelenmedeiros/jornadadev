import React from 'react'
import "./videoFooter.css"

function VideoFooter() {
  return (
    <div className='videoFooter'>
        <div className='videoFooter__text'>

            <h3>@Helen medeiros</h3>
                <p>Descriçao do video</p>
            <div className='videoFooter__music'>
                <p>Icone</p>
                <p>Titulo da musica</p>
            </div>
        </div>
        <img className='videoFooter__record'
        alt='imagem de um vinil girando'
        src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png'
        />
    </div>
  )
}

export default VideoFooter