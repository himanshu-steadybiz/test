import React, {Component} from "react";
import Swiper from "react-id-swiper";

class HeroSliderOne extends Component {
  render() {
    const params = {
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      watchSlidesVisibility: true,
      effect: "fade",
      navigation: {
        nextEl: ".ht-swiper-button-next",
        prevEl: ".ht-swiper-button-prev",
      },
      renderPrevButton: () => (
        <div className="ht-swiper-button-prev ht-swiper-button-nav d-none d-xl-block">
          <i className="ion-ios-arrow-left" />
        </div>
      ),
      renderNextButton: () => (
        <div className="ht-swiper-button-next ht-swiper-button-nav d-none d-xl-block">
          <i className="ion-ios-arrow-forward" />
        </div>
      ),
      autoplay: {
        delay: 5000,
      },
    };

    let data = [
      {
        bgImg: "slider4.jpg",
        sliderTitle: "",
        sliderSubtitle: "",
        btnLink: "contact-us",
      },
      {
        bgImg: "slider5.jpg",
        sliderTitle: "",
        sliderSubtitle: "",
        btnLink: "contact-us",
      },
      {
        bgImg: "slider6.jpg",
        sliderTitle: "",
        sliderSubtitle: "",
        btnLink: "contact-us",
      },
      {
        bgImg: "slider1.jpg",
        sliderTitle: "",
        sliderSubtitle: "",
        btnLink: "contact-us",
      },
      {
        bgImg: "slider3.jpg",
        sliderTitle: "शिव नंदीशाला टोहाना। इसमे लगभग 1600 गौवंश है।",
        sliderSubtitle:
          " प्रत्येक गौवंशों के लिए अलग अलग बाड़े/आवास की व्यवस्था है",
        btnLink: "contact-us",
      },
      //   {
      //     bgImg: "slider2.jpg",
      //     sliderTitle: "नंदी किचन गार्डन",
      //     sliderSubtitle:
      //       "गौवंशों को आत्मनिर्भर बनाने के लिए नंदीशाला द्वारा नन्दी किचन गार्डन की व्यवस्था की गई है",
      //     btnLink: "contact-us",
      //   },
    ];

    let DataList = data.map((val, i) => {
      return (
        <div className="swiper-slide" key={i}>
          <div
            className="hero-slider__single-item"
            style={{backgroundImage: `url(assets/img/slider/${val.bgImg})`}}
          >
            <div className="hero-slider__content-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="hero-slider__content m-auto text-center">
                      <h2 className="hero-slider__title">{val.sliderTitle}</h2>
                      <p className="hero-slider__text">{val.sliderSubtitle}</p>
                      {/* <a className="hero-slider__btn hero-slider__btn--style2" href={`${process.env.PUBLIC_URL}/${val.btnLink}`}> GET START</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        {/*====================  hero slider area ====================*/}
        <div className="hero-alider-area">
          <Swiper {...params}>{DataList}</Swiper>
        </div>
        {/*====================  End of hero slider area  ====================*/}
      </div>
    );
  }
}

export default HeroSliderOne;
