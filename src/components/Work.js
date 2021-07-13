import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import habit from '../Assets/images/habit.png';
import note from '../Assets/images/note-taker.png';
import watch from '../Assets/images/watch-sensor.png';
import readme from '../Assets/images/readme-gen.png';
import '../Assets/css/work.css';

export default function Work() {
    return (
        
  <div className="row row-cols-1 row-cols-md-2 g-4">
    <div className="col">
      <div className="card bg-dark text-white">
        <img src={watch} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">The Watch Sensor</h5>
          <p className="card-text">
            This dynamic Website application made with HTML, CSS, and JavaScript
            will allow a user to search for a movie title and get a list of
            movies to select from. Once they have selected a movie, they can
            click on it to reveal what platforms that movie is streaming from.
          </p>
         
          <a
            href="https://ashak90.github.io/project-01/"
            className="btn btn-secondary"
            role="button"
            >See it here</a
          >
        </div>
      </div>
    </div>

    
    <div className="col">
      <div className="card bg-dark text-white">
        <img src={habit} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Habit Tracker</h5>
          <p className="card-text">
            This is a Habit Tracker App that allows a user to track their
            habits, either good or bad. Along with Node.js, it uses Express.js
            to create a RESTFUL API, and Handlebars.js as the template engine.
            The database uses MySQL and Sequelize ORM.
          </p>
          <a
            href="https://habittracking-app.herokuapp.com/"
            className="btn btn-secondary"
            role="button"
            >See it here</a
          >
        </div>
      </div>
    </div>

    
    <div className="col">
      <div className="card bg-dark text-white">
        <img src={note} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Express Note Taker</h5>
          <p className="card-text">
            This is a note taking application used to write and save notes using
            Express.js. It saves and retrieves note data from a JSON file.
          </p>
          <a
            href="https://taking-notes1.herokuapp.com/"
            className="btn btn-secondary"
            role="button"
            >See it here</a
          >
        </div>
      </div>
    </div>

    
    <div className="col">
      <div className="card bg-dark text-white">
        <img src={readme} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">README Generator</h5>
          <p className="card-text">
            This allows one to quickly and easily create a README file by using
            a command-line application to generate one. This allows the project
            creator to devote more time to working on the project.
          </p>
          <a
            href="https://github.com/ricapi96/readme-generator"
            className="btn btn-secondary"
            role="button"
            >See it here</a
          >
        </div>
      </div>
    </div>
  </div>
    );
}

