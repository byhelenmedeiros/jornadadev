
import './App.css';
import Video from "./pages/video";

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
       
       <Video 
       likes={87}
       messages={164}
       shares={52}
       name="Helen"
       description="O gato zé"
       music="Cat music epic - Music of cat"
       url="https://firebasestorage.googleapis.com/v0/b/jornada3-a7924.appspot.com/o/brecker2.mp4?alt=media&token=5493f40a-3b0d-4c19-b5dd-a9016cc5a6d1"
       />

       <Video 
       likes={44}
       messages={24}
       shares={7}
       name="Helen"
       description="O gato zé"
       music="Cat music fun"
       url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
       />
       
       <Video 
       likes={126}
       messages={47}
       shares={6}
       name="Helen"
       description="O gato zé"
       music="Cat music fun"
       />

       <Video 
       likes={147}
       messages={63}
       shares={4}
       name="Helen"
       description="O gato zé"
       music="Cat music fun"
       />
       
     

     
       </div>
    </div>
  );
}

export default App;
