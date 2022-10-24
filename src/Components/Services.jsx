import React from 'react';




import ScrollAnimation from 'react-animate-on-scroll';

import '../Styling/AboutUsPage.css';


import core from '../UI/images/corevalues.jpg';
import vision from "../UI/images/vision.jpg";
import mission from '../UI/images/mission.jpeg'



const Services = () => {


    return (
        <div>
            <div className="container">
                <div>
                    <br />
                    <hr />
                    <h1 className="text-center text-uppercase" style={{fontWeight:'bold'}}>
                        <ScrollAnimation animateIn='flipInY'
                            animateOut='flipOutY' initiallyVisible={true}>
                            Our Company
                    </ScrollAnimation>
                    </h1>
                    {/* <h5 style={{ fontWeight: "lighter", textAlign: "center" }}>
                        <ScrollAnimation animateIn='fadeIn' delay={400}>
                            AlumTech Glass and Aluminium offers a wide range of aluminium products and services.

                            All our products comply with Dubai Green Building Regulations, Dubai Civil Defense and Abu Dhabi Estidama Regulations.
                    </ScrollAnimation>
                    </h5> */}
                    <br />

                    {/* Here will be all services */}
                    <div>
                        {/* Tabs navs */}
                        <ul className="nav nav-tabs nav-justified mb-3" id="ex1" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="ex3-tab-1" data-mdb-toggle="tab" href="#ex3-tabs-1" role="tab" aria-controls="ex3-tabs-1" aria-selected="true">Mission</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="ex3-tab-2" data-mdb-toggle="tab" href="#ex3-tabs-2" role="tab" aria-controls="ex3-tabs-2" aria-selected="false">Vision</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="ex3-tab-3" data-mdb-toggle="tab" href="#ex3-tabs-3" role="tab" aria-controls="ex3-tabs-3" aria-selected="false">Core Values</a>
                            </li>
                        </ul>
                        {/* Tabs navs */}
                        {/* Tabs content */}
                        <div className="tab-content" id="ex2-content">
                            <div className="tab-pane fade show active" id="ex3-tabs-1" role="tabpanel" aria-labelledby="ex3-tab-1">
                                <div className="container">

                                    <div className="row">
                                        <div className="col-md-7">
                                            <h1 style={{fontWeight:"bold"}}>
                                                <ScrollAnimation animateIn='bounceInRight' delay={400} initiallyVisible={true}>
                                                    OUR MISSION
                                                </ScrollAnimation>
                                            </h1>
                                            <h5 style={{ fontWeight: "lighter" }}>
                                                <ScrollAnimation animateIn="fadeIn" initiallyVisible={true}>
                                                        To provide Supply Chain Solutions for sustainable business growth..
                                                </ScrollAnimation>
                                            </h5>
                                        </div>
                                        <div className="col-md-5">
                                            <img src={mission} width="100%" height="300" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="ex3-tabs-2" role="tabpanel" aria-labelledby="ex3-tab-2">
                                <div className="container">

                                    <div className="row">
                                        <div className="col-md-7">
                                            <h1 style={{fontWeight:'bold'}}>
                                                <ScrollAnimation animateIn='bounceInRight' delay={400} initiallyVisible={true}>
                                                    OUR VISION
                                                </ScrollAnimation>
                                            </h1>
                                            <h5 style={{ fontWeight: "lighter" }}>
                                                <ScrollAnimation animateIn="fadeIn" initiallyVisible={true}>
                                                To be the preferred Supply Chain Management Solutions provider in Kenya and beyond.
                                                </ScrollAnimation>
                                            </h5>
                                        </div>
                                        <div className="col-md-5">
                                            <img src={vision} width="100%" height="300" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="ex3-tabs-3" role="tabpanel" aria-labelledby="ex3-tab-3">

                                <div className="container">

                                    <div className="row">
                                        <div className="col-md-7">
                                            <h1 style={{fontWeight:"bold"}}>
                                                <ScrollAnimation animateIn='bounceInRight' delay={400} initiallyVisible={true}>
                                                    Our Core Values
                                              </ScrollAnimation>
                                            </h1>
                                            <h5 style={{ fontWeight: "lighter" }}>
                                                <ScrollAnimation animateIn="fadeIn" initiallyVisible={true}>
                                                Quality service, Innovativeness, Integrity, Teamwork, Accountability, Excellence, Honesty, Respect.
                                              </ScrollAnimation>
                                            </h5>
                                        </div>
                                        <div className="col-md-5">
                                            <img src={core} width="100%" height="300" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Tabs content */}
                    </div>
                    {/* Here will be all services */}

                </div>
                <br />

            </div>
        </div>
    )
}
export default Services;