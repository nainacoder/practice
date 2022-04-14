import React from "react"
import "./Button.css"
const Buttons = (props) =>{
const {handleAdd,handleSub}=props;
    return(
        <div className="button_style">
        <button className="addButton" onClick={handleAdd}>ADD</button>
        <button className="subButton" onClick={handleSub}>Sub</button>
        <button className="reset" onClick={props.handleReset}>Reset</button>
        {/* <button>Multiply</button>
        <button>Divide</button> */}
        </div>
    )
}

export default Buttons