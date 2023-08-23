import Video from "./Video";
import PlayButton from "./playButton";


function VideoList({videos,deleteVideo,editVideo}){
    return(
        <>
        {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verfied={video.verfied}
          id={video.id}
          // delete
          deleteVideo={deleteVideo}
          editVideo={editVideo}
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

        </>
    )
}
export default VideoList;