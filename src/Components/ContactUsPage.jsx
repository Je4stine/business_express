import React, { useState, useEffect } from 'react';

import firebase from '../firebase/index';


import Header from './Header';


import ScrollAnimation from 'react-animate-on-scroll';

import '../Styling/careerPage.css';



import Footer from './Footer';

const CareersPage = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");



    const sendData = () => {

        ////////////////////////////To take the current date and time//////////////////////////////////
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date + ' ' + time;
        dateTime = dateTime.toString();
        ////////////////////////////To take the current date and time//////////////////////////////////

        let Data = {
            NAME: name,
            EMAIL: email,
            SUBJECT: subject,
            MESSAGE: message,
            currentTime: dateTime
        }

        //For storing all ads i.e to show at main page
        firebase.database().ref(`ContactUs/`).push(Data);

        alert("Thank you for contacting Us.We will reach back to you soon.");

    }

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


            <br />
            <br />
            <br />
            <br /> 
            <iframe src="https://maps.google.com/maps?q=next%20gen%20mombasa%20road&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height={450} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />

            <div className="container">

                <div>
                    <br />
                    <hr />
                    <h1 className="text-center text-uppercase text-primary">
                        <ScrollAnimation animateIn='flipInY'
                            animateOut='flipOutY'>
                            Contact Us
                    </ScrollAnimation>
                    </h1>
                    
                    <br />
                    <h6 style={{ fontWeight: "lighter", textAlign: "left" }}>
                        <ScrollAnimation animateIn='bounceInRight' delay={400}>
                            We will try to reach you soon
                        </ScrollAnimation>
                    </h6>
                    <br />

                    <label id="bottom" className="form-label">Your Name (required)</label>
                    <input type="text" placeholder="Enter your name here" onChange={(e) => setName(e.target.value)} className="form-control" />

                    <br />
                    <label className="form-label">Email (required)</label>
                    <input type="email" placeholder="Enter your email here" onChange={(e) => setEmail(e.target.value)} className="form-control" />

                    <br />
                    <label className="form-label">Subject</label>
                    <input type="text" placeholder="Enter your subject here" onChange={(e) => setSubject(e.target.value)} className="form-control" />

                    <br />
                    <label className="form-label">Your Message</label>
                    <textarea className="form-control" placeholder="Enter your message" onChange={(e) => setMessage(e.target.value)} rows="5"></textarea>

                    <br />

                  


                    {(name == "" || email == "" || subject == "" || message == "" ) ? (
                        <div>
                            <button disabled={true} className="btn btn-dark btn-lg" onClick={sendData}>Submit</button>
                            <br/> <br/>
                            <p className="text-danger">* Please fill all the fields to continue</p>
                        </div>
                    ) : (
                            <div>
                                <button className="btn btn-success btn-lg" onClick={sendData}>Submit</button>
                            </div>
                        )}



                    <br />



                </div>


            </div>
            <Footer />
            {/* <div id="bottom"></div> */}
        </div>
    )
}
export default CareersPage;