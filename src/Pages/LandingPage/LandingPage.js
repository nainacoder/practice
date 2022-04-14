import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div className="typing_text">
      <h1>
        Hello visitors ,<br />
        Explore my &nbsp;
        <span >
          <Typewriter
            words={["Login Page", "Counter"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        <br />
        Feedbacks and suggestions are <strong style={{color:"red"}}>welcome :)</strong>
      </h1>
    </div>
  );
};

export default LandingPage;
