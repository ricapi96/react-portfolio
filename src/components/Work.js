import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import habit from '../Assets/images/habit.png';
import note from '../Assets/images/note-taker.png';
import watch from '../Assets/images/watch-sensor.png';
import readme from '../Assets/images/readme-gen.png';
import '../Assets/css/work.css';

function Work() {
    return (
        
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col">
      <div class="card bg-dark text-white">
        <img src={watch} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">The Watch Sensor</h5>
          <p class="card-text">
            This dynamic Website application made with HTML, CSS, and JavaScript
            will allow a user to search for a movie title and get a list of
            movies to select from. Once they have selected a movie, they can
            click on it to reveal what platforms that movie is streaming from.
          </p>
         
          <a
            href="https://ashak90.github.io/project-01/"
            class="btn btn-secondary"
            role="button"
            >See it here</a
          >
        </div>
      </div>
    </div>

    
    <div class="col">
      <div class="card bg-dark text-white">
        <img src={habit} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Habit Tracker</h5>
          <p class="card-text">
            This is a Habit Tracker App that allows a user to track their
            habits, either good or bad. Along with Node.js, it uses Express.js
            to create a RESTFUL API, and Handlebars.js as the template engine.
            The database uses MySQL and Sequelize ORM.
          </p>
          <a
            href="https://habittracking-app.herokuapp.com/"
            class="btn btn-secondary"
            role="button"
            >See it here</a
          >
        </div>
      </div>
    </div>

    
    <div class="col">
      <div class="card bg-dark text-white">
        <img src={note} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Express Note Taker</h5>
          <p class="card-text">
            This is a note taking application used to write and save notes using
            Express.js. It saves and retrieves note data from a JSON file.
          </p>
          <a
            href="https://taking-notes1.herokuapp.com/"
            class="btn btn-secondary"
            role="button"
            >See it here</a
          >
        </div>
      </div>
    </div>

    
    <div class="col">
      <div class="card bg-dark text-white">
        <img src={readme} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">README Generator</h5>
          <p class="card-text">
            This allows one to quickly and easily create a README file by using
            a command-line application to generate one. This allows the project
            creator to devote more time to working on the project.
          </p>
          <a
            href="https://github.com/ricapi96/readme-generator"
            class="btn btn-secondary"
            role="button"
            >See it here</a
          >
        </div>
      </div>
    </div>
  </div>
    );
}

export default Work;