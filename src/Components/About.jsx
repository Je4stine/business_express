import React from 'react';

import { Link } from "react-router-dom";

import proudlycanadian from "../UI/proudlycanadian.JPEG XR"

import ScrollAnimation from 'react-animate-on-scroll';

import '../Styling/About.css';


const About = () => {



    React.useEffect(() => {


    });

    return (
        <div>
            <br />
            <h1 style={{ textTransform: "uppercase", fontWeight:'bold' }}>
                <ScrollAnimation delay={400}
                    animateIn='flipInX'
                    animateOut='flipOutY'
                >
                    Business Express Enterprices LTD
            </ScrollAnimation>
            </h1>
            <h3 style={{ fontWeight: "lighter", marginBottom:30 }}>
                <ScrollAnimation animateIn="bounceInLeft" delay={200}>
                    Slogan here
                </ScrollAnimation>

            </h3>
            <p style={{ fontWeight: "lighter" }}>
                <ScrollAnimation animateIn="fadeIn" delay={300}>
                   
                    Business Express Enterprises LTD is a company that trades in logistics business and mostly focuses in
                    distribution, transportation, sales, marketing, product promotion and warehousing merchandise of
                    consumers. Our business opportunity lies in acting as an intermediary between market, supplier and
                    consumer. Business Express Enterprises Ltd started back in 2006 as a Logistics and Courier Company
                    back in 2006
                    
                </ScrollAnimation>
            </p>
            <br />
            <div style={{ textAlign: "center" }}>
                <Link id="aboutuspagebtn" to="/about" className="btn">Learn More</Link>
            </div>
 
            <br />


            <br />

        </div>
    )
}
export default About;