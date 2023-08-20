import Video from "./Video";
import PlayButton from "./playButton";


function VideoList({vid}){
    return(
        <>
        {vid.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verfied={video.verfied}
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

        </>
    )
}
export default VideoList;