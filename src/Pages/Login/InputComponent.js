import React from "react";
import "./Input.css";

const InputComponent = (props) => {
  const { label, placeholder, type, key,onChange,...itemProps} = props;

  return (
    <div className="Input">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} id={key} onChange={onChange} {...itemProps}/>
    </div>
  );
};

export default InputComponent;
