import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import FeatureIcon from '../components/FeatureIcon';
import Funfact from '../components/Funfact';
import TeamMemberGrid from '../components/TeamMemberGrid';
import TestimonialSlider from '../components/TestimonialSlider';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import ModalVideo from 'react-modal-video'
class About extends Component{

    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
      }
     
      openModal () {
        this.setState({isOpen: true})
      }

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
                                    <h1>हमारे बारे में</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">होम</a></li>
                                        <li>हमारे बारे में</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of breadcrumb area  ====================*/}

                <div className="page-wrapper section-space--inner--top--120">
                {/*About section start*/}
                <div className="about-section section-space--inner--bottom--120">
                <div className="container">
                    <div className="row row-25 align-items-top">
                    <div className="col-lg-6 col-12 mb-30">
                        <div className="about-image-two">
                        <img src="assets/img/about/about-3.jpg" alt="" />
                            <span className="video-popup">
                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='sw4IhzLyL4o' onClose={() => this.setState({isOpen: false})} />
                                <button onClick={this.openModal}>
                                    <i className="ion-ios-play-outline" />
                                </button>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 mb-30">
                        <div className="about-content-two">
                        <h3>हरियाणा की पहली शिव नंदी गऊ सेवा समिति द्वारा संचालित शिव नंदी शाला टोहाना</h3>
                        {/* <h1>अगस्त 2014</h1>
                        <h4>We are ready to build your dream home Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, beatae.</h4> */}
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam repudiandae odit dolorum quis laudantium impedit beatae perferendis natus, hic libero sed atque quibusdam possimus error, voluptate est molestiae doloremque necessitatibus illum rerum sunt! Ad sunt obcaecati voluptatem sint sequi quos, qui non deleniti a praesentium, sapiente accusantium odit.</p> */}
                        <p>आज से लगभग 6 वर्ष पूर्व अगस्त 2014 में टोहाना शहर में बेसहारा गौवंशों के कारण लोगों को अनेक समस्याओं का सामना करना पड़ रहा था। गौवंशों के सड़क पर होने के कारण रोज दुर्घटनाएं हो रही थी कई बार तो यह बेजुबान गाड़ी के नीचे आते या कई बार इनके कारण  इंसान मर रहे थे </p>
  <p>शहर की  गौशालाओं में गौवंशों की संख्या ज्यादा थी । वह इन गोवंश  को जो सड़कों पर बेसहारा है लेने में  सक्षम नही थे । उस समय शहर के तत्कालीन एसडीएम डॉ जे के आभीर ने शहर के समाजसेवियों की एक मीटिंग बुलाई हुई थी उस मीटिंग में मेरा भी जाना हुआ डॉ जे के भेजने सभी शहर वासियों से इस समस्या को समाधान करने के लिए इसका हल निकालने के लिए कहा उसी समय मैंने इस सेवा को स्वीकार करते हुए नंदी शाला को के संचालन का जिम्मा लिया</p>
  <p> डॉक्टर जेके अभीर व  तत्कालीन विधायक  श्री सुभाष बराला के सहयोग से शहर में घूम रहे बेसहारा गोवंश  के लिए हरियाणा की पहली नंदी शाला बनाई गई जिनमें इनको रखा गया। यह नंदी शाला एक मॉडल के रूप में हरियाणा के सामने आई क्योंकि इससे पहले गौशालाओं में सिर्फ गाय को अधिक महत्व दिया जाता था सांडों का बैलों को नही रखा नहीं जाता था या बहुत कम रखा जाता था।</p>
  <p> जब हरियाणा की टोहाना शहर के अंदर पहली नंदी शाला बनी इसके बाद हरियाणा के मुख्यमंत्री मनोहर लाल खट्टर जी ने पूरे हरियाणा में नंदी शाला खोलकर इन बेसहारा गोवंश को जो सड़क पर घूम रहे थे ने नंदी शाला लाने का कार्य किया।  आज नंदी शाला टोहाना में लगभग 1600 गौवंश हैं नंदी शाला टोहाना केवल गौवंशों  की सेवा नहीं कर रही इसके साथ साथ मानव सेवा भी कर रही है  आज नंदी शाला टोहाना में बुजुर्गों की सेवा के लिए रामबाग उम्मीद जीने की केंद्र खुला है जहां बुजुर्ग आते हैं और अपना समय व्यतीत करते हैं उसी प्रकार  यात्रियों  के लिए रात्रि के समय रैन बसेरे  की व्यवस्था की गई है। </p>
  <p> इसके साथ साथ लोगों के लिए नन्दी किचन गार्डन नाम से नर्सरी बनाई गई है जिसमें औषधीय पौधों के साथ-साथ उन्हें सब्जियां भी उपलब्ध करवाई जाती हैं । इसके साथ-साथ नंदी शाला टोहाना में नंदी पक्षी विहार के नाम से केंद्र की स्थापना की गई है जहां घायल पशु व पक्षियों को भी रखा जाता है इस समय नंदी पक्षी विहार में खरगोश कबूतर तोता और बत्तख  बंदर आदि पक्षी है । नंदीशाला को आत्मनिर्भर बनाने के लिए गोबर  गैस ,  केंचुआ खाद, गोबर से  लकड़ी बनाने का  कार्य शुरू है ।</p>
  <p> इस प्रकार नंदी शाला गौ सेवा के साथ-साथ ऐसे अनेक कार्य कर रही है जिसमें जनकल्याण हैं</p>
                        <a href="services" className="ht-btn--default ht-btn--default--dark-hover section-space--top--20">Our Services</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*About section end*/}
                
                {/* Feature Icon */}
                {/* <FeatureIcon background = "grey-bg"/> */}

                {/*About section start*/}
                {/* <div className="about-section section-space--inner--120">
                <div className="container">
                    <div className="about-wrapper row">
                    <div className="col-sm-6 col-12 order-1 order-lg-2">
                        <div className="about-image about-image-1">
                        <img src="assets/img/about/about-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-12 order-2 order-lg-3">
                        <div className="about-image about-image-2">
                        <img src="assets/img/about/about-2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 order-3 order-lg-1">
                        <div className="about-content about-content-1">
                        <h1><span>50</span>Years of Experience</h1>
                        <p>ligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor ellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum atibus saepe eveniet ut et voluptates repudiandae sint et molestiae</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 order-4">
                        <div className="about-content about-content-2">
                        <p>ligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor ellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum atibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapie</p>
                        <a href={`${process.env.PUBLIC_URL}/contact-us`} className="ht-btn--default ht-btn--default--dark-hover section-space--top--20">Contact us</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                */}
                {/*About section end*/}
                
                {/* Fun fact */}
                {/* <Funfact/> */}
                
                {/* Team member */}
                {/* <TeamMemberGrid/> */}
                
                {/* Testimonial Slider */}
                {/* <TestimonialSlider/> */}
                
                {/* Brand logo */}
                {/* <BrandLogoSlider background = "" /> */}

                </div>


                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}


export default About;