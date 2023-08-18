import Video from "./components/Video";
import Navbar from "./components/Navbar";
import vid from "./data/data";

import PlayButton from "./components/playButton";

import "./App.css";
function App() {
  return (
    <div className="App" onClick={()=>console.log('App')}>
      <div>Videos</div>
      {vid.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        >
          <PlayButton
            onPlay={() => console.log('Playing..',video.title)}
            onPause={() => console.log('Paused..',video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}

      <div style={{ clear: 'both' }}>
        {/* <PlayButton message="play-msg" onPlay={()=>console.log('Play')} onPause={()=>console.log('Pause')}>Play</PlayButton> */}

        {/* <PlayButton message="pause-msg" onSmash={()=>alert('Playyy')}>Pause</PlayButton> */}
      </div>
    </div>
  );
}

export default App;
