import React from 'react';


export default function Contact() {

    return (
        <div class="row">
            <div id="blank_space2" class="col-md-12 col-sm-12"></div>

            <div id="contact_me" class="col-md-2 col-sm-12">
            <h3><u>Contact Me</u></h3>
            </div>
            <div id="contact_info" className="col-md-10 col-sm-12">
                <div className="card text-white bg-secondary mb-3" style={{ width: '18rem' }}>
                    <div className="card-header">Phone</div>
                    <div className="card-body">
                        <p className="card-text">(678) 718-5108</p>
                    </div>
                </div>

                <div className="card text-white bg-secondary mb-3" style={{ width: '18rem' }}>
                    <div className="card-header">email</div>
                    <div className="card-body">
                        <p className="card-text">enroquemore@gmail.com</p>
                    </div>
                </div>

                <div className="card text-white bg-secondary mb-3" style={{ width: '18rem' }}>
                    <div className="card-header">LinkedIn Profile</div>
                    <div className="card-body">
                        <a href="https://www.linkedin.com/in/ericaroquemore2684b563"className="btn btn-dark">LinkedIn</a>
                    </div>
                </div>

                <div className="card text-white bg-secondary mb-3" style={{ width: '18rem' }}>
                    <div className="card-header">Resume</div>
                    <div className="card-body">
                        <a href="https://docs.google.com/document/d/12NqnjjIHpPBu_HBQ5PLZq9I1TCeNnvAzrdgW9XFhliU/edit?usp=sharing" className="btn btn-dark">Resume
                        </a>
                    </div>
                </div>
                <div className="card text-white bg-secondary mb-3" style={{ width: '18rem' }}>
                    <div className="card-header">GitHub</div>
                    <div className="card-body">
                        <a href="https://github.com/ricapi96" className="btn btn-dark">GitHub Profile</a>
                    </div>
                </div>
            </div>
        </div>
    )
};