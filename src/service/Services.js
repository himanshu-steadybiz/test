import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
class Services extends Component{
    render(){

        let data = [
            {pageLink: 'service-details-left-sidebar', img: 'service1.jpg', iconClass: 'flaticon-002-welding', serviceTitle: 'शिव नंदीशाला टोहाना', serviceExcerpt: 'इसमे लगभग 1600 गौवंश है। प्रत्येक गौवंशों के लिए अलग अलग बाड़े/आवास की व्यवस्था है। इन आवास के गौवंशों के अनुसार अलग अलग नाम है। राधिका कान्हा आवास में छोटे छोटे बछड़ो व बछड़ियों को रखा जाता है सुरभि आवास में हरियाणा नस्ल की देसी गाय , देवकी आवास में बीमारी गौवंश, नंदिनी आवास में अच्छी नस्ल की गाय के बच्चों को नस्ल सुधार के लिए ,श्यामा आवास में विदेशी नस्ल की गाय,भाग्यवती में दूध देने वाली गाय, यशोदा आवास में में गर्भवती गाय बलराम आवास में व नन्दी आवास में सांडों व बैलों को रखा जाता है। '},
            {pageLink: 'service-details-left-sidebar', img: 'service2.jpg', iconClass: 'flaticon-004-walkie-talkie', serviceTitle: 'नन्दी किचन गार्डन', serviceExcerpt: 'गौवंशों को आत्मनिर्भर बनाने के लिए नंदीशाला द्वारा नन्दी किचन गार्डन की व्यवस्था की गई है   जिसमें औषधीय व किचन के पौधों जैसे  तेजपत्ता, गरम मसाला,कढ़ी पत्ता, दाल चीनी,अजवायन हींग ,पत्थर चट , इंसुलिन, स्टीविया, गिलोय,तुलसी एलोबेरा,आदि के साथ-साथ लोगों को सब्जी के पौधे  भी मिल मिलेंगे इसके साथ साथ नंदी शाला द्वारा तैयार की गई नंदी कंपोस्ट व नंदी कीटनाशक भी यहां तैयार किया जाता है जोकि पेड़ पौधों के लिए आवश्यक है '},
            {pageLink: 'service-details-left-sidebar', img: 'service3.jpg', iconClass: 'flaticon-015-cart', serviceTitle: 'नंदी पक्षी विहार', serviceExcerpt: 'नंदी शाला द्वारा गौवंशों के साथ साथ अन्य पशु व पक्षियों कि जो किसी कारणवश बीमार हो जाते हैं या उन्हें कोई चोट या  उनके साथ दुर्घटना हो जाती है तो नंदी शाला में रखा जाता है आज नंदी शाला में बत्तख खरगोश तोता कबूतर और बंदर आदि पशु पक्षी है जो लोगों के आकर्षण का केंद्र भी है 4)डॉ जय किशन आभीर नन्दी कार्यशाला नंदी शाला द्वारा संचालित जय किशन अभीर कार्यशाला की स्थापना की गई है जिसमें केंचुआ खाद ,गोबर से लकड़ी बनाना व  हवन सामग्री का निर्माण किया जाता है गौमाता को आत्मनिर्भर बनाने के लिए यह भी एक महत्वपूर्ण कदम है।'},
            {pageLink: 'service-details-left-sidebar', img: 'service4.jpg', iconClass: 'flaticon-010-tank-1', serviceTitle: 'नंदी  बायोगैस प्लांट', serviceExcerpt: 'नंदी शाला टोहाना में बायोगैस प्लांट लगा है जिससे नंदी शाला को इंधन के रूप में गैस प्राप्त होती है दूसरा इससे नंदी शाला को रात के समय बिजली प्राप्त होती है यह भी गौशाला को आत्मनिर्भर बनाने में एक महत्वपूर्ण कदम है '},
            {pageLink: 'service-details-left-sidebar', img: 'service5.jpg', iconClass: 'flaticon-004-walkie-talkie', serviceTitle: 'नंदी महिला कीर्तन मंडली', serviceExcerpt: ' नंदी शाला द्वारा संचालित नंदी महिला कीर्तन मंडली लोगों के घर घर जाकर खुशी के पलों के समय पर गौ माता का गुणगान करती है वे उन्हें आशीर्वाद देती है इससे जो भी दान आता है वह गोवंश ओके भरण पोषण के काम आता है '},
            {pageLink: 'service-details-left-sidebar', img: 'service6.jpg', iconClass: 'flaticon-002-welding', serviceTitle: 'नंदी औषधालय', serviceExcerpt: 'नंदी औषधालय में गाय के मूत्र से अनेक प्रकार की औषधियां तैयार की जाती है जिससे शरीर में अनेक प्रकार की बीमारियां दूर होती हैं नंदी शाला टोहाना में पथरी, बाबासीर ,गैस बदहजमी ,आंखों की दवाई ,कानों में डालने की दवाई आदि मिलती है '},
            {pageLink: 'service-details-left-sidebar', img: 'service7.jpg', iconClass: 'flaticon-002-welding',  serviceTitle: 'नंदी रसोई', serviceExcerpt: 'गरीब लोगों को खाना बनाने से लेकर नंदी शाला टोहाना में गाय के दूध से लेकर घी, मक्खन लस्सी आदि नन्दी रसोई  में मिलते हैं इससे जो आय प्राप्त होती है वह गौ माता के भरण-पोषण के काम आती है । '},
            {pageLink: 'service-details-left-sidebar', img: 'service8.jpg', iconClass: 'flaticon-002-welding',serviceTitle:'नन्दी सहायता समूह', serviceExcerpt: 'गरीब असहाय व जरूरतमंद व आपातकालीन स्थिति में लोगो की सहायता करने के लिए नन्दी सहायता समूह बनाया गया है जो गौसेवा के साथ साथ मानव सेवा में भी तैयार रहता है । कोरोना काल में इस समूह ने सेनिटाइजर से लेकर राशन  व मास्क बाटने का कार्य किया है । आज भी बहुत से लोगो को अनाज से लेकर दूध व दवाई से लेकर गरीब बेटियों की शादी में यह समूह मदद करता है। '},
            {pageLink: 'service-details-left-sidebar', img: 'service9.jpg', iconClass: 'flaticon-002-welding', serviceTitle: 'नंदी रैन बसेरा', serviceExcerpt: 'रात्रि के समय लोगों के ठहरने के लिए नंदी शाला में नंदी रैन बसेरे की उचित व्यवस्था है ताकि कोई भी आदमी की सड़क पर या कहीं स्टेशन या बस स्टैंड पर खुले में न सोए । उसके लिए नंदी शाला टोहाना में रात के समय ठहरने का उचित प्रबंध है।'},
        ];

        let Datalist = data.map((val, i) => {
            return(
                <div className="col-lg-4 col-md-6 col-12 section-space--bottom--30" key={i}>
                    <div className="service-grid-item">
                    <div className="service-grid-item__image">
                        <div className="service-grid-item__image-wrapper">
                        <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>
                            <img src={`assets/img/service/${val.img}`} className="img-fluid" alt="Service Grid" />
                        </a>
                        </div>
                        {/* <div className="icon">
                        <i className={val.iconClass} />
                        </div> */}
                    </div>
                    <div className="service-grid-item__content">
                        <h3 className="title">
                        <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>{val.serviceTitle}</a>
                        </h3>
                        <p className="subtitle">{val.serviceExcerpt}</p>
                        {/* <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`} className="see-more-link">SEE MORE</a> */}
                    </div>
                    </div>
                </div>
            )
        });

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
                                    <h1>हमारी सेवाएं</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">होम</a></li>
                                        <li>हमारी सेवाएं</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of breadcrumb area  ====================*/}

                {/*====================  service page content ====================*/}
                <div className="page-wrapper section-space--inner--120">
                {/*Service section start*/}
                <div className="service-section">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="service-item-wrapper">
                            <div className="row">
                                {Datalist}
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/*Service section end*/}
                </div>

                {/*====================  End of service page content  ====================*/}

                {/* Brand logo */}
                <BrandLogoSlider background = "grey-bg" />

                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}

export default Services;