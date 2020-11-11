import React, {Component} from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        {/*====================  footer area ====================*/}
        <div className="footer-area dark-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-content-wrapper section-space--inner--100">
                  <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-12">
                      {/* footer intro wrapper */}
                      <div className="footer-intro-wrapper">
                        <div className="footer-logo">
                          <a href={`${process.env.PUBLIC_URL}`}>
                            <img
                              src="assets/img/logo/logo-light.png"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="footer-desc">
                          हरियाणा की पहली शिव नंदी गऊ सेवा समिति द्वारा संचालित
                          शिव नंदी शाला टोहाना
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                      {/* footer widget */}
                      <div className="footer-widget">
                        <h4 className="footer-widget__title">उपयोगी लिंक</h4>
                        <ul className="footer-widget__navigation">
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/`}>होम</a>
                          </li>

                          <li>
                            <a href={`${process.env.PUBLIC_URL}/contact-us`}>
                              संपर्क करें
                            </a>
                          </li>
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/our-team`}>
                              हमारी टीम
                            </a>
                          </li>
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/services`}>
                              हमारी सेवाएं
                            </a>
                          </li>
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/donate-us`}>
                              हमें दान दें
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                      {/* footer widget */}
                      <div className="footer-widget">
                        <h4 className="footer-widget__title">हमें दान दें</h4>
                        <ul className="footer-widget__navigation">
                          <li>
                            <a className="footer.inactiveLink">
                              कॉरपोरेशन बैंक अकाउंट नंबर 318400101000852 IFSC
                              Code CORP0003184
                            </a>
                          </li>
                          <li></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                      {/* footer widget */}
                      <div className="footer-widget mb-0">
                        <h4 className="footer-widget__title">संपर्क करें</h4>
                        <div className="footer-widget__content">
                          <p className="address">
                            शहीद चौक आर एम सी हॉस्पिटल के पीछे टोहाना जिला
                            फतेहाबाद हरियाणा 125120
                          </p>
                          <ul className="contact-details">
                            <li>
                              <span>M:</span>9896742540
                            </li>
                            <li>
                              <span>M:</span>9890790200
                            </li>
                            <li>
                              <span>E:</span>arjungandhi111@gmail.com
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright-wrapper">
            <div className="footer-copyright text-center">
              Copyright © {new Date().getFullYear()}. All right reserved
            </div>
          </div>
        </div>
        {/*====================  End of footer area  ====================*/}
        {/*====================  scroll top ====================*/}
        <button className="scroll-top" id="scroll-top">
          <i className="ion-android-arrow-up" />
        </button>
        {/*====================  End of scroll top  ====================*/}
      </div>
    );
  }
}

export default Footer;
