import React from 'react';



import Logo from '../UI/logo2.JPEG XR';

import footerimg from '../UI/footerimg.JPEG XR';

import '../Styling/Footer.css';


const Footer = () => {



    return (
        <div style={{ backgroundColor: "#292b2c",color:"white" }}>
            <br />

            <br />
            <br />


            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{fontWeight:'bold'}}>
                        {/* <img className="logoFooter" src={Logo} alt="Alum tech" /> */}
                        BUSINESS EXPRESS ENTREPRICES LTD
                    </div>
                    <div className="col-md-6">
                        <div id="footerIcons" style={{ display:"flex" }}>
                            <a className="btn btn-primary btn-lg btn-floating" style={{ backgroundColor: '#3b5998' }} href="https://www.facebook.com/" role="button"><i className="fab fa-facebook-f" /></a>
                            {/* Twitter */}
                            <a className="btn btn-primary btn-lg btn-floating" style={{ backgroundColor: '#55acee' }} href="#!" role="button"><i className="fab fa-twitter" /></a>
                            {/* Instagram */}
                            <a className="btn btn-primary btn-lg btn-floating" style={{ backgroundColor: '#ac2bac' }} href="https://www.instagram.com/" role="button"><i className="fab fa-instagram" /></a>
                            {/* Linkedin */}
                            <a className="btn btn-primary btn-lg btn-floating" style={{ backgroundColor: '#0082ca' }} href="https://www.linkedin.com/in/" role="button"><i className="fab fa-linkedin-in" /></a>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <hr/>
                <br/>
                <div className="row">
                    {/* <div className="col-md-3">
                        <img id="imageFooterRow" src={footerimg} alt=""/>
                    </div> */}
                    <div className="col-md-6 col-sm-6">
                        <ul>
                            <li style={{fontWeight:"bolder"}}>ADDRESS</li>
                            <li>Business Express Enterprices Limited </li>
                            <li>Address:  110-00110</li>
                            <li>Nairobi</li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <ul>
                            <li style={{fontWeight:"bolder"}}>CONTACT</li>
                            <li>Tel: (+254) 777-7777</li>
                            <li>Customer service: (+254)888-8888</li>
                            <li>E-mail: info@businessexpressltd.co.ke</li>
                        </ul>
                    </div>
                    
                </div>
      
                <hr/>
                <br/>
                <div className="row">
                    <h6 style={{fontWeight:"lighter"}}>© 2022 Business Express LTD. All rights reserved.</h6>
                </div>
            </div>

            <br />
            <br />

        </div>
    )
}
export default Footer;