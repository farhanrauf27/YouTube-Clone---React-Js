import "./Video.css"

function Video({ title, views, channel, time, id, verfied, children }) {

    // let jsx;
    // if(verfied){
    //     jsx =<div className="channel">{channel} ✅ </div>;

    // }else{
    //     jsx=<div className="channel">{channel}  </div>;
    // }


    return (
        <>
            <div className="container my-2 " >
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