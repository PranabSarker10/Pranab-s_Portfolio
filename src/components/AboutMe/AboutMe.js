import { faBriefcase, faCode, faLanguage, faUser, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { faFileCode, faIdCard } from '@fortawesome/free-regular-svg-icons';
import Flip from 'react-reveal/Flip';


const AboutMe = () => {
    return (

        <div className="container mb-5">
            <div className="pb-5 pt-3">
                <h3>
                    <Flip top cascade>
                        <span className="pb-2 custom-red-color my-border-bottom">
                            <FontAwesomeIcon icon={faUser} /> About Me
                        </span>
                    </Flip>
                </h3>
            </div>

            <div className="container about-container">



                {/* <div className=" container row" data-aos="fade-down">
                    <div className="col- py-2">
                        <a class="btn btnSubmit mr-2" href="" target="_blank">
                            <FontAwesomeIcon icon={faCloudDownloadAlt} /><span className="ml-2">DOWNLOAD RESUME</span>
                        </a>
                    </div>
                    <div className="col- py-2">
                        <a class="btn CustomGreenBtn" href="/contact" target="_blank">
                            <FontAwesomeIcon icon={faPaperPlane} /><span className="ml-2">CONTACT ME</span>
                        </a>
                    </div>
                </div> */}

                <Fade bottom >
                    <section>
                        <div className="row">
                            <div className="col-md-4">
                                <p className="fw-bold">
                                    <FontAwesomeIcon icon={faIdCard} /> About Me
                                </p>
                            </div>
                            <div className="col-md-8 ">
                                {/* <p>Front-End Web Developer using React.js with a decent knowledge of the backend technology like Node.js, Express.js, MongoDB, REST-API, JSON, Firebase, Debugging and more.</p> */}

                                <p style={{ textAlign: 'justify' }}>
                                    I have completed my bachelor’s degree in Computer Science and Engineering (CSE) from Rajshahi University of Engineering and Technology (RUET). Besides my education, I have done several MERN Stack <Link to="/projects">projects</Link> using React, Bootstrap, Tailwind, JavaScript, Node.js, MongoDB etc. As a  Front-End React Developer position my keen attention to detail and designing knowledge will be an added advantage for me to serve any company with a quality service.
                                </p>
                            </div>
                        </div>
                    </section>
                </Fade>

                <hr />

                <Fade bottom>
                    <section>
                        <div className="row">
                            <div className="col-md-4">
                                <p className="fw-bold">
                                    <FontAwesomeIcon icon={faUserGraduate} /> Education

                                </p>
                            </div>

                            <div className="col-md-8">
                                <div>
                                    <p className="fw-bold my-0">Rajshahi University of Engineering and Technology (RUET)</p>
                                    <p>BS'c in Computer Science and Engineering (CSE) </p>
                                    <ul>
                                        <li>Passing Year: 2019 </li>
                                        <li>Result: First Class </li>
                                    </ul>
                                </div>




                                {}
                            </div>
                        </div>
                    </section>
                </Fade>

                <hr />

                <Fade bottom >
                    <section className="about-section" >
                        <div className="row">
                            <div className="col-md-4 ">
                                <p className="fw-bold">
                                    <FontAwesomeIcon icon={faCode} /> Skills
                                </p>
                            </div>
                            <div className="col-md-8 ">
                                {/* 1st row */}
                                <div className="row">
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-javascript-plain colored display-4"></i>
                                        <p className="fw-bold">JavaScript</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-react-original colored display-4"></i>
                                        <p className="fw-bold">React</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-nodejs-plain colored display-4"></i>
                                        <p className="fw-bold">Node.js</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-express-original colored display-4"></i>
                                        <p className="fw-bold">Express.js</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-mongodb-plain colored display-4"></i>
                                        <p className="fw-bold">MongoDB</p>
                                    </div>

                                </div>


                                <div className="row">
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-bootstrap-plain colored display-4"></i>
                                        <p className="fw-bold">Bootstrap 5</p>
                                    </div>

                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-html5-plain-wordmark colored display-4"></i>
                                        <p className="fw-bold">HTML5</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-css3-plain-wordmark colored display-4"></i>
                                        <p className="fw-bold">CSS3</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-sass-original colored display-4"></i>
                                        <p className="fw-bold">Sass</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-tailwindcss-plain colored display-4"></i>
                                        <p className="fw-bold">Tailwind CSS</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-materialui-plain colored display-4"></i>
                                        <p className="fw-bold">Material UI</p>
                                    </div>

                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-git-plain-wordmark colored display-4"></i>
                                        <p className="fw-bold">Git</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        {/* <i className="devicon-git-plain-wordmark colored display-4"></i>
                                    <p className="fw-bold">Git</p> */}
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        {/* <i className="devicon-git-plain-wordmark colored display-4"></i>
                                    <p className="fw-bold">Git</p> */}
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        {/* <i className="devicon-git-plain-wordmark colored display-4"></i>
                                    <p className="fw-bold">Git</p> */}
                                    </div>
                                </div>



                                {/* 4th row */}
                                <div className="row">

                                </div>


                            </div>
                        </div>
                    </section>
                </Fade>

                <hr />

                <Fade bottom >
                    <section className="about-section" >
                        <div className="row">
                            <div className="col-md-4">
                                <p className="fw-bold">
                                    <FontAwesomeIcon icon={faFileCode} /> Other Skills
                                </p>
                            </div>

                            <div className="col-md-4">
                                <ul>
                                    <li className="mt-2">Agile Methodology</li>
                                    <li className="mt-2">UX/UI</li>
                                    <li className="mt-2">Debugging</li>
                                    <li className="mt-2">REST APIs</li>
                                    <li className="mt-2">ES6</li>
                                    <li className="mt-2">Google Analytics</li>
                                    <li className="mt-2">Bootstrap</li>
                                    <li className="mt-2">Cyber Security</li>
                                    <li className="mt-2">SEO</li>
                                    <li className="mt-2">C++</li>

                                </ul>
                            </div>
                        </div>
                    </section>
                </Fade>

                <hr />

                <Fade bottom >
                    <section className="about-section" >
                        <div className="row">
                            <div className="col-md-4">
                                <p className="fw-bold">
                                    <FontAwesomeIcon icon={faBriefcase} /> Professional Training
                                </p>
                            </div>

                            <div className="col-md">

                                <div className="d-flex justify-content-between">
                                    <p className=""><b>1. Complete Web Development Course</b>/ Programming Hero</p>
                                    <p className="">Jun 2021 - Dec 2021</p>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <p className=""><b>2. Graphics Design Training</b>/ LEDP</p>
                                    <p className="">Oct 2020 - Dec 2020</p>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <p className=""><b>3. National App Award 2016 Seminar and Workshop</b> / Krishibid Institute Bangladesh governed by ICT division
                                    </p>
                                    <p className="">2017</p>
                                </div>



                            </div>

                        </div>
                    </section>
                </Fade>

                <hr />

                <Fade bottom >
                    <section className="about-section" >
                        <div className="row">
                            <div className="col-md-4">
                                <p className="fw-bold">
                                    <FontAwesomeIcon icon={faBriefcase} /> Work Experience
                                </p>
                            </div>

                            <div className="col-md">

                                <p className="float-end">16 August, 2021 – Presen</p>
                                <p className="fw-bold my-0"> Software Quality Assurance Engineer ( Automation )</p>
                                <p className="text-secondary">BJIT LIMITED | Plot No- 2740 and 2745 Pachkhola, Dhaka 1212</p>
                            </div>

                        </div>
                    </section>
                </Fade>
                <hr />

                {}
                <Fade bottom>
                    <section className="about-section" >
                        <div className="row">
                            <div className="col-md-4">
                                <p className="fw-bold">
                                    <FontAwesomeIcon icon={faLanguage} />  Language
                                </p>
                            </div>

                            <div className="col-md-4">
                                <ul>
                                    <li className="mt-2">English</li>
                                    <li className="mt-2">Bengali</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </Fade>

            </div>




        </div >
    );
};

export default AboutMe;