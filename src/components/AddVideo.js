import { useEffect, useState } from "react"

const initialState={
    time: "",
    channel: "",
    verfied: ' ',
    title:'',
    views:''
}
function AddVideo({ addV,editableVideo}) {
    const [video, setVideo] = useState(initialState);
    function handleSubmit(e) {
        e.stopPropagation()
        e.preventDefault()
        addV(video)
        setVideo(initialState)
        
    }
    function handleChange(e) {
        e.stopPropagation()
        setVideo({
            ...video,
            [e.target.name]: e.target.value
        })
    }
    // Update 
    useEffect(()=>{
        if(editableVideo){

            setVideo(editableVideo)
        }
    },[editableVideo])
    return (
        <form >
            <div className="d-flex" style={{ flexDirection:'column',margin:"0 auto", width: '20%' }}>
                <div>
                <input onChange={handleChange} name="title" className="my-2 p-2" type="text" placeholder="Title" value={video.title} />
                <input onChange={handleChange} name="views" className="my-2 p-2" type="text" placeholder="Views" value={video.views} />
                <input onChange={handleChange} name="channel" className="my-2 p-2" type="text" placeholder="Channel" value={video.channel} />
                <input onChange={handleChange} name="time" className="my-2 p-2" type="text" placeholder="Time" value={video.time} />
                <div className="d-flex">
                <label htmlFor="verfied">is verified </label>
                <input onChange={handleChange} className="my-2 mx-2" type="checkbox" name="verfied" id=""  value={video.verfied} />
                </div>
            <button className="btn btn-danger my-2" onClick={handleSubmit}> Add Video</button>
                </div>
            </div>
        </form>

    );


}
export default AddVideo;