
import './App.css';
import Video from "./pages/video";

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
       
       <Video 
       likes={5}
       messages={54}
       shares={52}
       />
       <Video />
       <Video />
       <Video />
     

     
       </div>
    </div>
  );
}

export default App;
