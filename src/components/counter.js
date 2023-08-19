import { useState } from "react";

function Counter(){
    const [number,setNumber]=useState(0)

    function handleClick(e){
        e.stopPropagation()
        setNumber(number=>number+1)
        console.log(number)
        
    }
return(
    <>
    <div className="container mb-2 mx-4 d-flex ">
     <h1 className="mx-4 ">{number}</h1>
    <button className="btn btn-primary" onClick={handleClick}>Click</button>
    </div>
    </>
);


}
export default Counter;


