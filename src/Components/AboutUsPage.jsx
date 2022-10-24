import React from 'react';




import Header from './Header';


import ScrollAnimation from 'react-animate-on-scroll';

import '../Styling/AboutUsPage.css';


import aboutimg from '../UI/about.JPEG XR'

import Contact from './Contact';

import Footer from './Footer';
import aboutme from '../UI/images/accounting.jpeg'

const AboutUsPage = () => {



    React.useEffect(() => {


    });

    return (
        <div>
            <div className="container">
                <div className="fixed-top">
                    <Header />
                </div>
            </div>

            <div className="animatedArrow">
                <a href="#bottom" style={{borderRadius:"50%", border: "0px solid #ADD8E6", fontSize: 50, backgroundColor: "transparent" }} className="btn-floating btn-large red">
                    <i className="fa fa-arrow-down" />
                </a>
            </div>

            <section className="showcase2">
                <div className="image-container">
                    <img src={aboutme} alt="About Us" />
                </div>
                <div className="content2">
                    {/* <h1>{TEXTS[index]}</h1> */}
                    <h1 id="aboutushead">
                        <ScrollAnimation animateIn="fadeIn" delay={200}>
                            About Us
                        </ScrollAnimation>
                    </h1>
                </div>
            </section>
            <div className="container">
                <div>
                    <br />
                    <br />
                    <h1 style={{ textTransform: "uppercase", textAlign: "center" }}>
                        <ScrollAnimation delay={400}
                            animateIn='flipInX'
                            animateOut='flipOutY'
                        >
                            SLOGAN
                         </ScrollAnimation>
                    </h1>
                    <br />
                    <span id="bottom"></span>
                    <h5 style={{ fontWeight: "lighter", textAlign: "center", lineHeight: "35px" }}>
                        <ScrollAnimation animateIn="fadeIn" delay={300}>
                        Business Express Enterprises LTD is a company that trades in logistics business and mostly focuses in
                        distribution, transportation, sales, marketing, product promotion and warehousing merchandise of
                        consumers. Our business opportunity lies in acting as an intermediary between market, supplier and
                        consumer. Business Express Enterprises Ltd started back in 2006 as a Logistics and Courier Company
                        back in 2006
                       
                        </ScrollAnimation>
                    </h5>
                </div>
                <Contact />
            </div>
            <Footer />
         
        </div>
    )
}
export default AboutUsPage;