import React from "react"
import './App.css';
import Counter from "./Pages/Counter/Counter";
import Header from "./Header/Header";
import Login from "./Pages/Login/Login";
import LandingPage from "./Pages/LandingPage/LandingPage"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
function App() {
  return (
    
    <BrowserRouter>
    <Header/>
    {/* <ErrorPage/> */}
    <Routes>
      <Route exact path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/counter" element={<Counter/>}/>
      <Route path="#"  element={<ErrorPage/>}/>
    </Routes>
   </BrowserRouter>
   
  );
}

export default App;
