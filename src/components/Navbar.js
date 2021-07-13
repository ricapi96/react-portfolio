import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {

    return (

        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">ER</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#about_me">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#work">Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact_me">Contact Me</a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
};