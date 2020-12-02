import './App.css';
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <div classname="app__videos">
        <Video
          url=""
          channel='demoacc'
          description="This is the description"
          song="This is the song"
          likes={4132}
          messages={243}
          shares={325}
        />
        <Video
          url=""
          channel='acc'
          description="This is the description"
          song="This is the song"
          likes={253}
          messages={41}
          shares={143}
        />
      </div>
    </div>
  );
}

export default App;
