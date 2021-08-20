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
      <h3><u>About Me</u></h3>
        <p>
          Born and raised in Metro Atlanta, I was just a kid when I became
          interested in computers. However, after high school, I started working
          in restaurants, moving my way up from server to bartender, and then to
          management. I stayed in that field for 15 years. It taught me how to
          deal with people and develop my soft skills. It wasn't until the
          pandemic hit that I really started to consider a career in Web
          development. I was hospitalized in July 2020, and once I got home and
          recovered, I enrolled in a coding bootcamp at Georgia Tech. Also, I
          went back to school and am earning my BA in Computer Science. I've
          learned so much in these past six months, and can't wait to start my
          new career as a Full Stack Web Developer!<br></br>
        </p>
      </div>
    </div>
  );
}
