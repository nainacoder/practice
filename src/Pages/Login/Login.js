import React, { useState } from "react";
import InputComponent from "./InputComponent";
import { Link } from "react-router-dom";
import "./Login.css"
const Login = () => {
    const [values, setValues] = useState({
        username:"",
        email:"",
        password:"",
    });
  const input = [
    {
      id: 0,
      type: "text",
      label: "User Name",
      placeholder: "username",
      name: "username",
    },
    {
      id: 1,
      type: "email",
      label: "Email ID",
      placeholder: "abc@xyz.com",
      name: "email",
    },
    {
        id:2,
        type:"password",
        label:"Password",
        placeholder:"password",
     name:"password",
    },
  ];

function handleSubmit(e){
    e.preventDefault();
    // setValues({})
}

function handleInputChange(e){
   setValues({...values,[e.target.name]:e.target.value });
}
console.log(values)
  return (
    
      <div className="container">
      <form onSubmit={handleSubmit}>
          <h1>Login</h1>
        {input.map((item) => {
          return (
            <InputComponent
              key={item.id}
              type={item.type}
              label={item.label}
              placeholder={item.placeholder}
              value={values[item.name]}
              onChange={handleInputChange}
            {...item}
            />
          );
        })}
        <button>Submit</button>
      </form>
      <div className="link_buttons">
      <Link to="/"><button >Home</button></Link>
      <Link to="/counter"><button>Counter</button></Link>
      </div>
      
    </div>
    
      
    
    
    
    
  );
};

export default Login;
