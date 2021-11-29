import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import MyForm from './MyForm';
import Flip from 'react-reveal/Flip';

const Contact = () => {
    return (
        <div className="container">
            <div className="pb-5 pt-3">
                <h3>
                    <Flip top cascade>
                        <span className="pb-2 custom-red-color my-border-bottom">
                            <FontAwesomeIcon icon={faPaperPlane} /> Contact Me
                        </span>
                    </Flip>
                </h3>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <p className="mb-3 fw-bold">Please send your text here</p>
                    <MyForm></MyForm>
                </div>
                <div className="col-md-6">
                    <p className="fw-bold">You also find me</p>
                    <hr />

                    <div className="mt-4 ">
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 89/1 , South Boundary Road, Mymensingh Sadar, Bangladesh.</p>
                        <p><FontAwesomeIcon icon={faPhoneAlt} /> +8801521444752</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> .com</p>pranabsarkerruet14@gmail.com

                        <p>
                            <a href="https://www.linkedin.com/in/pranab-sarker-a01657156/" rel="noreferrer" target="_blank" className="btn btn-linkedIn me-2 ">
                                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                            </a>
                            <a href="https://github.com/PranabSarker10" rel="noreferrer" target="_blank" className="btn btn-github me-2">
                                <FontAwesomeIcon icon={faGithub} /> GitHub
                            </a>
                            <a href="https://twitter.com/PranabSarker5" rel="noreferrer" target="_blank" className="btn btn-twitter me-2">
                                <FontAwesomeIcon icon={faTwitter} /> Twitter
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;