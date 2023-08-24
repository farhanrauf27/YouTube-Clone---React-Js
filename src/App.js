import exportVideo from "./data/data";
// import Counter from "./components/counter";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";


import "./App.css";
import { useContext, useReducer, useState } from "react";
import ThemeContext from "./context/themeContext";

function App() {
  const [editableVideo, seteditableVideo] = useState(null);
  function videoReducer(videos,action){
    switch(action.type){
      case 'ADD':
        return [...videos, { ...action.payload, id: videos.length + 1 }]
      case 'DELETE':
        return videos.filter(video=>video.id!==action.payload)
      case 'UPDATE':
        const index=videos.findIndex(v=>v.id===action.payload.id)
        const updated=[...videos]
        updated.splice(index,1,action.payload)
        seteditableVideo(null)
        return updated
     
        default:
          return videos;
    }

  }
  const [videos,dispatch]= useReducer(videoReducer,exportVideo)
  const themeContext = useContext(ThemeContext)

  // const [videos, setVideos] = useState(exportVideo);
  

  function addVideos(video) {
    dispatch({
      type:'ADD',
      payload:video
    })

    // setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }
  // Delete
  function deleteVideo(id) {
    dispatch({
      type:'DELETE',
      payload:id
    })
    // setVideos(videos.filter(video=>video.id!==id))
   
  }
  // Update
  function editVideo(id) {
   
   seteditableVideo(videos.find(video=>video.id===id))
  }
  function update(video){
    dispatch({
      type:'UPDATE',
      payload:video
    })
    // const index=videos.findIndex(v=>v.id===video.id)
    // const updated=[...videos]
    // updated.splice(index,1,video)
    // setVideos(updated)

  }
  return (
    <>
    
    <div className={`App ${themeContext}`} onClick={() => console.log("App")}>
      <div className="d-flex" style={{justifyContent:'space-around'}}>
      {/* delete  Update */}
        <VideoList deleteVideo={deleteVideo} editVideo={editVideo} videos={videos}></VideoList> 
        <AddVideo editableVideo={editableVideo} update={update} addV={addVideos}></AddVideo>
      </div>
    </div>
    </>
  );
}

export default App;
