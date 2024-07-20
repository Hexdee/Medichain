import React, { Component } from 'react';

class Footer extends Component {
    state = {}
    render() {
        return (<footer className="footer">
            <div className="container">
                <div className="widget-wrapper">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="footer-widget">
                                <div className="logo mb-30">
                                    <a href="index.html">
                                        <img src="assets/img/logo/logo.svg" alt="" />
                                    </a>
                                </div>
                                <p className="desc mb-30 text-white">
                                    Mariam and Ajibola's EHR project website
                                </p>
                                <ul className="socials">
                                    <li>
                                        <a href="">
                                            <i className="lni lni-facebook-filled"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="lni lni-twitter-filled"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="lni lni-instagram-filled"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href=":">
                                            <i className="lni lni-linkedin-original"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-2 col-md-6">
                            <div className="footer-widget">
                                <h3>About Us</h3>
                                <ul className="links">
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Feature</a></li>
                                    <li><a href="">About</a></li>
                                    <li><a href="">Testimonials</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h3>Features</h3>
                                <ul className="links">
                                    <li><a href="">How it works</a></li>
                                    <li><a href="">Privacy policy</a></li>
                                    <li><a href="">Terms of service</a></li>
                                    <li><a href="">Refund policy</a></li>
                                </ul>
                            </div>
                        </div>

                      
                        </div>
                    </div>
                </div>
            </div>
        </footer>);
    }
}

export default Footer;








