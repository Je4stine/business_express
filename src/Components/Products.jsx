import React from 'react';



import ScrollAnimation from 'react-animate-on-scroll';

import '../Styling/Products.css';



import clearing from '../UI/images/clearing11.jpg';
import accounting from '../UI/images/accounting1.jpeg';
import distribution from '../UI/images/distribution.jpg'
import warehouse from '../UI/images/warehouse1.jpg';
import kra from '../UI/images/kra.jpg';
import market from '../UI/images/marketing.jpg'

const Products = () => {



    React.useEffect(() => {


    });

    return (
        <div>
            <br />
            <hr />
            <h1 className="text-center text-uppercase">
                <ScrollAnimation animateIn='flipInY'
                    animateOut='flipOutY'>
                    Our Services
                </ScrollAnimation>
            </h1>
            <h5 style={{ fontWeight: "lighter", textAlign: "center" }}>
                <ScrollAnimation animateIn='fadeIn' delay={400}>
                We are committed to developing a successful- business criteria through constant communication,
                proactive report and feedbacks. Building a strong client relationship is fundamental to our distinctive
                service.
                </ScrollAnimation>
            </h5>
            <br />
            <div className="container">
                <div className="row">


                <div className="col-md-4">
                        <div className="containerInside">
                            <img className="image" src={distribution} alt="pic" />
                            <div className="imageOverlay imageOverlayBlur">
                                <div className="image_title">
                                    Distribution
                                </div>
                                <div className="imageDisc">
                                    <p>
                                    Business Express Enterprises Ltd serves offers to find most appropriate and convenient distributive
                                    channels based on market research to our customers’ products and services to the point of
                                    consumption. This involves transportation of goods and services to points of ne
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>






                    <div className="col-md-4">
                        <div className="containerInside">
                            <img className="image" src={clearing} alt="pic" />
                            <div className="imageOverlay imageOverlayBlur">
                                <div className="image_title">
                                    Clearing a fowarding
                                </div>
                                <div className="imageDisc">
                                    <ul>
                                        <li>-Import/Export customs clearance service.</li>
                                        <li>-Customs evaluation of merchandise.</li>
                                        <li>-Classification of goods.</li>
                                        <li>-Customs surveying.</li>
                                        <li>-Import/Export record maintenance.</li>
                                        <li>-Payment of custom duty on customers behalf.</li>
                                        <li>-Consultancy services.</li>
                                        <li>-Transit customs handling.</li>
                                        <li>-Import duty and tax assessment</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4">
                        <div className="containerInside">
                            <img className="image" src={accounting} alt="pic" />
                            <div className="imageOverlay imageOverlayBlur">
                                <div className="image_title">
                                    Accounting Services
                                </div>
                                <div className="imageDisc">
                                <p>
                                    We tend to provide quantitative information, financial in nature to help make economic decisions. <br/>
                                    Accounting services we offer include; <br/>
                                    -Gathering financial information on behalf of clients <br/>
                                    -Keeping financial records of clients <br/>
                                    -Informing financial decision making. <br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    


                






                </div>
                <br />
                <div className="row">
                    <div className="col-md-4">
                        <div className="containerInside">
                            <img className="image" src={warehouse} alt="pic" />
                            <div className="imageOverlay imageOverlayBlur">
                                <div className="image_title">
                                    Warehousing
                                </div>
                                <div className="imageDisc">
                                    <p>
                                    As a business we offer storage facilities for physical inventory. Our warehousing facilities offers ample
                                    security measures for the products we deal with.
                                    Our warehousing services include; <br/>
                                    -Short-term and long- term storage.<br/>
                                    -Cargo loading and unloading.<br/>
                                    -Cargo distribution
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="containerInside">
                            <img className="image" src={kra} alt="pic" />
                            <div className="imageOverlay imageOverlayBlur">
                                <div className="image_title">
                                Tax Consultancy Services
                                </div>
                                <div className="imageDisc">
                                   <p>
                                   As a tax consultant company, we offer services such as <br/>
                                    - Preparation of tax returns <br/>
                                    - Determine taxes owed – As a tax consultant company we help determine how much our clients owe in
                                    taxes, overpay in taxes and whether they comply with taxing instructions. <br/>
                                    - Educate, train and instruct clients on tax rules and regulations
                                   </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <div className="col-md-4">
                        <div className="containerInside">
                            <img className="image" src={accounting} alt="pic" />
                            <div className="imageOverlay imageOverlayBlur">
                                <div className="image_title">
                                            Accounting Services
                                </div>
                                <div className="imageDisc">
                                    <p>
                                    We tend to provide quantitative information, financial in nature to help make economic decisions. <br/>
                                    Accounting services we offer include; <br/>
                                    -Gathering financial information on behalf of clients <br/>
                                    -Keeping financial records of clients <br/>
                                    -Informing financial decision making. <br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    )
}
export default Products;