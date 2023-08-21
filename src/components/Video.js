import "./Video.css"

function Video({ title, views, channel, time, id, verfied, children,deleteVideo,editVideo }) {

    // let jsx;
    // if(verfied){
    //     jsx =<div className="channel">{channel} ✅ </div>;

    // }else{
    //     jsx=<div className="channel">{channel}  </div>;
    // }
    
    return (
        <>
            <div className="container my-2 row " id="x" >
                {/* Delete */}
                <div className="d-flex" style={{justifyContent:'flex-end'}}>
                <button className="btn btn-danger" onClick={()=>deleteVideo(id)} style={{borderRadius:'100px',marginBottom:'-40px',position:'relative'}}>X</button>
                </div>
                <div className="d-flex" style={{justifyContent:'flex-start'}}>
                <button className="btn btn-primary" onClick={()=>editVideo(id)} style={{borderRadius:'100px',marginBottom:'-20px',position:'relative'}}>🖉
</button>
                </div>
                
                <div className="pic">
                    <img src={`https://picsum.photos/id/${id}/200/300`} alt="Katherine Johnson" />
                </div>
                <div className="title my-2">{title}</div>
                <div className="channel">   {channel}
                    {/* {verfied ? "✅" : null} case 1 */}
                    {verfied && "✅"}   {/*Case 2 */}
                </div>
                <div className="views">{views} views <span>.</span>{time}</div>
                <div>
                    {children}
                </div>
                
            </div>
        </>
    );
}


export default Video;