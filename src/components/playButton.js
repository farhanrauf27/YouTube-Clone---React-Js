import { useState } from 'react';
import './playButton.css'
function PlayButton({children,onPlay,onPause}){
    const [play,setPlay]= useState(true)
  function click(e){
    e.stopPropagation()
    if(play) onPlay() ;
    else onPause();

    setPlay(!play)
  }
  

    return(
        <>
        <button className="btn btn-primary mx-4" id='id1' onClick={click}>{children} {!play?"▶️":"⏸️"}</button>
        
        </>
    );
}
export default PlayButton;