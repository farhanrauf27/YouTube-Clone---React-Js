import { useState } from "react"

function AddVideo({ addV }) {
    const [video, setVideo] = useState({
        time: "1 month",
        channel: "Coder Dost",

        verified: true
    });
    function handleSubmit(e) {
        e.stopPropagation()
        e.preventDefault()
        addV(video)
    }
    function handleChange(e) {
        e.stopPropagation()
        setVideo({
            ...video,
            [e.target.name]: e.target.value
        })

    }
    return (
        <form >
            <div className="d-flex" style={{ justifyContent: 'center', flexDirection: 'column', width: '20%' }}>
                <input onChange={handleChange} name="title" className="my-2 p-2" type="text" placeholder="Title" />
                <input onChange={handleChange} name="views" className="my-2 p-2" type="text" placeholder="Views" />
                {/* <input className="my-4" type="text" name="" id="" />
        <input className="my-4" type="text" name="" id="" /> */}
            </div>
            <button className="btn btn-danger" onClick={handleSubmit}> Add Video</button>
        </form>

    );


}
export default AddVideo;