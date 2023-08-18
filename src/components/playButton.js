import './playButton.css'
function PlayButton({children,onPlay,onPause}){
    let play=true
  function click(e){
    e.stopPropagation()
    if(play) onPlay();
    else onPause();

    play=!play
  }
  

    return(
        <>
        <button className="btn btn-primary mx-4" id='id1' onClick={click}>{children} {play?"||":"<<"}</button>
        
        </>
    );
}
export default PlayButton;