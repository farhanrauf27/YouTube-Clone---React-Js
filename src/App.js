import exportVideo from "./data/data";
// import Counter from "./components/counter";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";


import "./App.css";
import { useState } from "react";

function App() {
  const [vid, setVid] = useState(exportVideo);

  function addVideos(video) {
    setVid([...vid, { ...video, id: vid.length + 1 }]);
  }
  return (
    <div className="App" onClick={() => console.log("App")}>
      <div>
        <AddVideo addV={addVideos}></AddVideo>
        <VideoList vid={vid}></VideoList>
      </div>
    </div>
  );
}

export default App;
