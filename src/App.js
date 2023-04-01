
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
       />

       <Video 
       likes={44}
       messages={24}
       shares={7}
       name="Helen"
       description="O gato zé"
       music="Cat music fun"
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
