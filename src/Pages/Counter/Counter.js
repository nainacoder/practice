import React, { useState } from "react";
import Buttons from "./Button";
import "./Counter.css"
const Counter = () => {
  const [count, setCount] = useState(0);
  
const handleAdd =()=>{
    if(count!==15){
        setCount(count + 1)
    }
    else {
        setCount(count)
    }
}

const handleSub = ()=>{
    if(count !==0){
        setCount(count - 1)
    }else {
        setCount(count)
    }
  
}

const handleReset = ()=>{
    setCount(0)
}




  return (
    <div className="counter_container">
        <div className="counter_main">
        <h3>Count:&nbsp;{count}</h3>
      <Buttons handleAdd={handleAdd} handleSub={handleSub} handleReset={handleReset}/>
        </div>
     
    </div>
  );
};

export default Counter;
