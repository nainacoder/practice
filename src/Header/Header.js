import React from "react"
import { Link } from "react-router-dom";
import "./Header.css"
const Header = ()=>{
    return(
    <div className="header">
<nav>
<div className="logo">
    <h2><Link to="/" >HELLO!!</Link></h2>
</div>

<ul className="ul_items">
    
    <li><Link to="/login" >Login</Link> </li>
    <li><Link to="/counter">Counter</Link></li>
</ul>


</nav>

    </div>
    )
}

export default Header;