import React from "react";
import { useState } from "react";

const Count= ()=>{

    const [count,setCount] = useState(0)

    console.log(typeof count)
    console.log(typeof setCount)

    return (<div className="Count">
            <h1>Count is {count}</h1> 
             <button onClick={()=>setCount(count+1)}>increase</button>
    </div>)
}
export default Count