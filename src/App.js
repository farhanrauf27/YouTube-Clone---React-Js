import exportVideo from "./data/data";
// import Counter from "./components/counter";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";


import "./App.css";
import { useState } from "react";

function App() {
  const [vid, setVid] = useState(exportVideo);
  const [editableVideo, seteditableVideo] = useState(null);

  function addVideos(video) {
    setVid([...vid, { ...video, id: vid.length + 1 }]);
  }
  // Delete
  function deleteVideo(id) {
    setVid(vid.filter(video=>video.id!==id))
   
  }
  function editVideo(id) {
   seteditableVideo(vid.find(video=>video.id===id))
   
  }
  return (
    <div className="App" onClick={() => console.log("App")}>
      <div className="d-flex" style={{justifyContent:'space-around'}}>
      {/* delete  Update */}
        <VideoList deleteVideo={deleteVideo} editVideo={editVideo} vid={vid}></VideoList> 
        <AddVideo editableVideo={editableVideo} addV={addVideos}></AddVideo>
      </div>
    </div>
  );
}

export default App;
