import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profile from "../Assets/images/profile.jpg";

export default function About() {
  return (
    <div className="row">
      
      <img src={profile} alt="pic of me"/>
      <br />
      <div id="about_me" className="col-md-2 col-sm-12">
      
      </div>
      <div id="middle" className="col-md-10 col-sm-12">
      <h1><u>About Me</u></h1>
        <h3>
         I work for 2U teaching Web Development. <br></br>
        </h3>
      </div>
    </div>
  );
}
