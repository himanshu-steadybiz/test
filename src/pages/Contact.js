import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
class Contact extends Component{
    render(){
        return(
            <div>
                {/* Navigation bar */}
                <NavBar/>

                {/* breadcrumb */}
                {/*====================  breadcrumb area ====================*/}
                <div className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="page-banner text-center">
                                    <h1>संपर्क करें</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">होम</a></li>
                                        <li>संपर्क करें</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of breadcrumb area  ====================*/}

                {/*====================  content page content ====================*/}
                <div className="page-wrapper section-space--inner--120">
                {/*Contact section start*/}
                <div className="conact-section">
                    <div className="container">
                    <div className="row section-space--bottom--50">
                        <div className="col">
                            <div className="contact-map">
                            <iframe title="google-map" src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d659.1110697527702!2d75.90616575284292!3d29.70706965719778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3911976469ac0dff%3A0xf51d71f6c9b61789!2sGupta%20Colony%2C%20Tohana%2C%20Haryana%20125120!3m2!1d29.7070436!2d75.9063149!5e0!3m2!1sen!2sin!4v1602106297918!5m2!1sen!2sin" allowFullScreen></iframe>
                            
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-12">
                        <div className="contact-information">
                            <h3>संपर्क जानकारी</h3>
                            <ul>
                                <li>
                                    <span className="icon"><i className="ion-android-map" /></span>
                                    <span className="text"><span>शहीद चौक आर एम सी हॉस्पिटल के पीछे
टोहाना जिला फतेहाबाद हरियाणा 125120</span></span>
                                </li>
                                <li>
                                    <span className="icon"><i className="ion-ios-telephone-outline" /></span>
                                    <span className="text"><a href="tel:9896742540">9896742540</a><a href="tel:9890790200">9890790200</a></span>
                                </li>
                                <li>
                                    <span className="icon"><i className="ion-ios-email-outline" /></span>
                                    <span className="text"><a href="mailto:info@example.com">info@example.com</a><a href="mailto:info@example.com">info@example.com</a></span>
                                </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-lg-8 col-12">
                        <div className="contact-form">
                            <h3>अपना संदेश छोड़ दें</h3>
                            <form id="contact-form">
                            <div className="row row-10">
                                <div className="col-md-6 col-12 section-space--bottom--20"><input name="con_name" type="text" placeholder="आपका नाम" /></div>
                                <div className="col-md-6 col-12 section-space--bottom--20"><input name="con_email" type="email" placeholder="आपका ईमेल" /></div>
                                <div className="col-12"><textarea name="con_message" placeholder="आपका सन्देश" defaultValue={""} /></div>
                                <div className="col-12"><button>मेसेज भेजें</button></div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/*Contact section end*/}
                </div>
                {/*====================  End of content page content  ====================*/}
                
                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}


export default Contact;