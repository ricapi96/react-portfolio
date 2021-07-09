import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profile from '../images/profile.jpg';
import '../style/index.css';

export default function About() {

    return (
        <section class="heroImg" id="aboutMe">

            <div class="content">
                <img src={profile} alt="Erica Roquemore" className="profile" />
                <h3>ER</h3>
                <h2>Hey! I'm Erica and I'm a Full Stack Developer!</h2>
                <p>I love to travel, play video games, and take hikes with my dog. I became interested in Web Development after I was hospitalized during the pandemic, and I've been working hard to break into this new and exciting career ever since. </p>
            </div>

            
        </section>
    )
}