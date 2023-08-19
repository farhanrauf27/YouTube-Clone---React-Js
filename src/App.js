import Video from "./components/Video";

import exportVideo from "./data/data";

import PlayButton from "./components/playButton";

import Counter from "./components/counter";

import AddVideo from "./components/AddVideo"
import "./App.css";
import { useState } from "react";





function App() {
  const [vid,setVid]=useState(exportVideo)

  function addVideos(video){
    setVid([...vid,
     {...video,id: vid.length+1}
    ])
  }


  return (
    <div className="App" onClick={()=>console.log('App')}>
      <div >
         <AddVideo addV={addVideos}></AddVideo>
      </div>
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
          <div className="my-2 " style={{display:'flex',justifyContent:'center'}}>
            <div>
          <PlayButton
            onPlay={() => console.log('Playing..',video.title)}
            onPause={() => console.log('Paused..',video.title)}
          >
            {video.title}
          </PlayButton>
          </div>
          </div>
        </Video>
      ))}

      <div style={{ clear: 'both' }}>
        <Counter/>
      </div>
    </div>
  );
}

export default App;
