import React from 'react';


import Header from './Header';

// import ScrollAnimation from 'react-animate-on-scroll';

import '../Styling/AboutUsPage.css';

import services from '../UI/services.JPEG XR'


import Contact from './Contact';

import Footer from './Footer';
import Products from './Products';


const ServicesPage = () => {


    return (
        <div>
            <div className="container">
                <div className="fixed-top">
                    <Header />
                </div>
            </div>


            <br /><br /><br />

            <img src={services} width="100%" height="300" alt="" />

            <div className="container">
                <div>

                  <Products/>

                </div>
                <br />
                <Contact />
            </div>
            <Footer />
            {/* <div id="bottom"></div> */}
        </div>
    )
}
export default ServicesPage;