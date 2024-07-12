hiimport React, { Component } from 'react';

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
                                    Mariam and Ajibola's project@Unilorin
    
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

                        
           
              </div>
                    </div>
                </div>
            </div>
        </footer>);
    }
}

export default Footer;









