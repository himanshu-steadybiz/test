import React, {Component} from "react";
import Swiper from "react-id-swiper";

class ServiceGridSlider extends Component {
  render() {
    const params = {
      slidesPerView: 3,
      loop: true,
      speed: 1000,
      watchSlidesVisibility: true,
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
      },
      // Responsive breakpoints
      breakpoints: {
        1499: {
          slidesPerView: 3,
        },

        991: {
          slidesPerView: 2,
        },

        767: {
          slidesPerView: 1,
        },

        575: {
          slidesPerView: 1,
        },
      },
    };
    let data = [
      {
        img: "service2.jpg",
        serviceTitle: "रामबाग उम्मीद जीने की",
        serviceExcerpt:
          "नंदी शाला द्वारा वृद्ध लोगों की सेवा के लिए डे केयर सेंटर वृद्ध आश्रम बनाया जा रहा है जिसमें बुजुर्ग लोगों के रुकने खाने-पीने व  उनकी  मेडिकल चिकित्सा से संबंधित सभी सुविधाएं मिला करेंगी ।",
        serviceUrl: "service-details-left-sidebar",
      },
      {
        img: "service1.jpg",
        serviceTitle: "महात्मा ज्योतिबा फुले पुस्तकालय",
        serviceExcerpt:
          "महात्मा ज्योतिबा फुले पुस्तकालय नंदी शाला टोहाना द्वारा जल्द ही एक लाइब्रेरी का निर्माण किया जा रहा है जहां लोगों को जहां बच्चों को पढ़ने के लिए उचित स्थान के साथ-साथ अनेक महत्वपूर्ण किताबें व कंपटीशन एग्जाम की तैयारी करवाई जाएगी",
        serviceUrl: "service-details-left-sidebar",
      },
    ];

    let DataList = data.map((val, i) => {
      return (
        <div className="swiper-slide" key={i}>
          <div className="service-grid-item service-grid-item--style2">
            <div className="service-grid-item__image">
              <div className="service-grid-item__image-wrapper">
                {/* <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}> */}
                <img
                  src={`assets/img/upcomingProjects/${val.img}`}
                  className="img-fluid"
                  alt=""
                />
                {/* </a> */}
              </div>
            </div>
            <div className="service-grid-item__content">
              <h3 className="title">
                <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>
                  {val.serviceTitle}
                </a>
              </h3>
              <p className="subtitle">{val.serviceExcerpt}</p>
              {/* <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`} className="see-more-link">SEE MORE</a> */}
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        {/*====================  project grid slider area ====================*/}
        <div className="service-slider-title-area grey-bg section-space--inner--top--120 section-space--inner--bottom--285">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area text-center">
                  {/* <h2 className="section-title mb-0">आने वाले प्रोजेक्ट Upcoming projects </h2> */}
                  <h2 className="section-title mb-0">आने वाले प्रोजेक्ट </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-grid-slider-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="service-slider">
                  <div className="service-slider__container service-slider__container--style2">
                    <Swiper {...params}>{DataList}</Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of project grid slider area  ====================*/}
      </div>
    );
  }
}

export default ServiceGridSlider;
