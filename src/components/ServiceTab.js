import React, {Component} from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
class ServiceTabExample extends Component {
  render() {
    /* service tab menu */
    let serviceTabMenuData = [
      {iconName: "flaticon-012-scheme", tabMenuName: "शिव नंदीशाला"},
      {iconName: "flaticon-012-scheme", tabMenuName: "नन्दी किचन गार्डन"},

      {iconName: "flaticon-012-scheme", tabMenuName: "नंदी पक्षी विहार"},
      {iconName: "flaticon-012-scheme", tabMenuName: "नंदी महिला कीर्तन मंडली"},
    ];

    let serviceTabMenuDatalist = serviceTabMenuData.map((val, i) => {
      return (
        <Tab key={i}>
          {" "}
          <span className="icon">
            <i className={val.iconName} />
          </span>{" "}
          <span className="text">{val.tabMenuName}</span>
        </Tab>
      );
    });

    /* service tab content */

    let serviceTabContentData = [
      {
        bgUrl: "service-tab1.jpg",
        contentTitle: "शिव नंदीशाला",
        contentDesc:
          "इसमे लगभग 1600 गौवंश है। प्रत्येक गौवंशों के लिए अलग अलग बाड़े/आवास की व्यवस्था है। इन आवास के गौवंशों के अनुसार अलग अलग नाम है। राधिका कान्हा आवास में छोटे छोटे बछड़ो व बछड़ियों को रखा जाता है सुरभि आवास में हरियाणा नस्ल की देसी गाय , देवकी आवास में बीमारी गौवंश, नंदिनी आवास में अच्छी नस्ल की गाय के बच्चों को नस्ल सुधार के लिए ,श्यामा आवास में विदेशी नस्ल की गाय,भाग्यवती में दूध देने वाली गाय, यशोदा आवास में में गर्भवती गाय बलराम आवास में व नन्दी आवास में सांडों व बैलों को रखा जाता है।",
        serviceLink: "service-details-left-sidebar",
      },

      {
        bgUrl: "service-tab2.jpg",
        contentTitle: "नन्दी किचन गार्डन",
        contentDesc:
          "गौवंशों को आत्मनिर्भर बनाने के लिए नंदीशाला द्वारा नन्दी किचन गार्डन की व्यवस्था की गई है   जिसमें औषधीय व किचन के पौधों जैसे  तेजपत्ता, गरम मसाला,कढ़ी पत्ता, दाल चीनी,अजवायन हींग ,पत्थर चट , इंसुलिन, स्टीविया, गिलोय,तुलसी एलोबेरा,आदि के साथ-साथ लोगों को सब्जी के पौधे  भी मिल मिलेंगे इसके साथ साथ नंदी शाला द्वारा तैयार की गई नंदी कंपोस्ट व नंदी कीटनाशक भी यहां तैयार किया जाता है जोकि पेड़ पौधों के लिए आवश्यक है",
        serviceLink: "service-details-left-sidebar",
      },

      {
        bgUrl: "service-tab3.jpg",
        contentTitle: "नंदी पक्षी विहार",
        contentDesc:
          "नंदी शाला द्वारा गौवंशों के साथ साथ अन्य पशु व पक्षियों कि जो किसी कारणवश बीमार हो जाते हैं या उन्हें कोई चोट या  उनके साथ दुर्घटना हो जाती है तो नंदी शाला में रखा जाता है आज नंदी शाला में बत्तख खरगोश तोता कबूतर और बंदर आदि पशु पक्षी है जो लोगों के आकर्षण का केंद्र भी है 4)डॉ जय किशन आभीर नन्दी कार्यशाला नंदी शाला द्वारा संचालित जय किशन अभीर कार्यशाला की स्थापना की गई है जिसमें केंचुआ खाद ,गोबर से लकड़ी बनाना व  हवन सामग्री का निर्माण किया जाता है गौमाता को आत्मनिर्भर बनाने के लिए यह भी एक महत्वपूर्ण कदम है।",
        serviceUrl: "service-details-left-sidebar",
      },
      {
        bgUrl: "service-tab4.jpg",
        contentTitle: "नंदी महिला कीर्तन मंडली",
        contentDesc:
          "नंदी शाला द्वारा संचालित नंदी महिला कीर्तन मंडली लोगों के घर घर जाकर खुशी के पलों के समय पर गौ माता का गुणगान करती है वे उन्हें आशीर्वाद देती है इससे जो भी दान आता है वह गोवंश ओके भरण पोषण के काम आता है",
        serviceLink: "service-details-left-sidebar",
      },
    ];

    let serviceTabContentDatalist = serviceTabContentData.map((val, i) => {
      return (
        <TabPanel key={i}>
          <div
            className="service-tab__single-content-wrapper"
            style={{
              backgroundImage: `url(assets/img/backgrounds/${val.bgUrl})`,
            }}
          >
            <div className="service-tab__single-content">
              <h3 className="service-tab__title">{val.contentTitle}</h3>
              <p className="service-tab__text">{val.contentDesc}</p>
              {/* <a href={`${process.env.PUBLIC_URL}/${val.serviceLink}`} className="see-more-link">SEE MORE</a> */}
            </div>
          </div>
        </TabPanel>
      );
    });

    return (
      <div>
        {/*====================  service tab area ====================*/}
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area text-center">
                  {/* <h2 className="section-title section-space--bottom--50">Our Services</h2> */}
                  <h2 className="section-title section-space--bottom--50">
                    हमारी सेवाएं
                  </h2>
                </div>
              </div>
              <div className="col-lg-12">
                {/* service tab wrapper */}

                <div className="service-tab-wrapper">
                  <Tabs>
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <TabList>
                          <div className="service-tab__link-wrapper">
                            {serviceTabMenuDatalist}
                          </div>
                        </TabList>
                      </div>

                      <div className="col-md-8">
                        {serviceTabContentDatalist}
                      </div>
                    </div>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of service tab area  ====================*/}
      </div>
    );
  }
}

export default ServiceTabExample;
