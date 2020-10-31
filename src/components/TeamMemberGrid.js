import React, {Component} from "react";

class TeamMemberGrid extends Component {
  render() {
    /* team member data */

    let data = [
      {
        profileImage: "Dharampal-Saini.jpg",
        profileTitle: "धर्मपाल सैनी",
        profileDesignation: "सयोजक/संस्थापक",
        profileEmail: "9896742540",
        socialLinks: {
          facebook: "//www.facebook.com",
          twitter: "//www.twitter.com",
          linkedin: "//www.linkedin.com",
          googlePlus: "//plus.google.com",
        },
      },
      {
        profileImage: "dileep-saini.jpg",
        profileTitle: "दिलीप सिंह",
        profileDesignation: "सरक्षक",
        profileEmail: "9896790200",
        socialLinks: {
          facebook: "//www.facebook.com",
          twitter: "//www.twitter.com",
          linkedin: "//www.linkedin.com",
          googlePlus: "//plus.google.com",
        },
      },
      {
        profileImage: "team-3.jpg",
        profileTitle: "बंसी लाल",
        profileDesignation: "प्रधान",
        profileEmail: "9355570025",
        socialLinks: {
          facebook: "//www.facebook.com",
          twitter: "//www.twitter.com",
          linkedin: "//www.linkedin.com",
          googlePlus: "//plus.google.com",
        },
      },
      {
        profileImage: "Ram-kumar-Saini.jpg",
        profileTitle: "राजकुमार सैनी",
        profileDesignation: "मैनेजर",
        profileEmail: "8572086111",
        socialLinks: {
          facebook: "//www.facebook.com",
          twitter: "//www.twitter.com",
          linkedin: "//www.linkedin.com",
          googlePlus: "//plus.google.com",
        },
      },
      {
        profileImage: "jile-singh.jpg",
        profileTitle: "जीले सिंह",
        profileDesignation: "मैनेजर",
        profileEmail: "8572086111",
        socialLinks: {
          facebook: "//www.facebook.com",
          twitter: "//www.twitter.com",
          linkedin: "//www.linkedin.com",
          googlePlus: "//plus.google.com",
        },
      },

      {
        profileImage: "chetar-saini.jpg",
        profileTitle: "छित्तर सैनी",
        profileDesignation: "ऊप प्रधान",
        profileEmail: "",
        socialLinks: {
          facebook: "//www.facebook.com",
          twitter: "//www.twitter.com",
          linkedin: "//www.linkedin.com",
          googlePlus: "//plus.google.com",
        },
      },
      {
        profileImage: "mahendra-saini.jpg",
        profileTitle: "महेंद्र सैनी",
        profileDesignation: "ऊप प्रधान",
        profileEmail: "9416622669",
        socialLinks: {
          facebook: "//www.facebook.com",
          twitter: "//www.twitter.com",
          linkedin: "//www.linkedin.com",
          googlePlus: "//plus.google.com",
        },
      },
      {
        profileImage: "Prem-saini.jpg",
        profileTitle: "प्रेम सैनी",
        profileDesignation: "ऊप प्रधान",
        profileEmail: "9466921173",
        socialLinks: {
          facebook: "//www.facebook.com",
          twitter: "//www.twitter.com",
          linkedin: "//www.linkedin.com",
          googlePlus: "//plus.google.com",
        },
      },
      {
        profileImage: "rishipal.jpg",
        profileTitle: "ऋषिपाल",
        profileDesignation: "सचिव",
        profileEmail: "9017207437",
        socialLinks: {
          facebook: "//www.facebook.com",
          twitter: "//www.twitter.com",
          linkedin: "//www.linkedin.com",
          googlePlus: "//plus.google.com",
        },
      },
      {
        profileImage: "sardara-ram-saini.jpg",
        profileTitle: "सरदारा राम",
        profileDesignation: "कोषाध्यक्ष",
        profileEmail: "9466481092",
        socialLinks: {
          facebook: "//www.facebook.com",
          twitter: "//www.twitter.com",
          linkedin: "//www.linkedin.com",
          googlePlus: "//plus.google.com",
        },
      },
      {
        profileImage: "baljeet-saini.jpg",
        profileTitle: "बलजीत सिंह",
        profileDesignation: "ऑडिटर",
        profileEmail: "9896710300",
        socialLinks: {
          facebook: "//www.facebook.com",
          twitter: "//www.twitter.com",
          linkedin: "//www.linkedin.com",
          googlePlus: "//plus.google.com",
        },
      },
      {
        profileImage: "mahveer-saini.jpg",
        profileTitle: "महावीर सिंह",
        profileDesignation: "ऑडिटर",
        profileEmail: "9466334977",
        socialLinks: {
          facebook: "//www.facebook.com",
          twitter: "//www.twitter.com",
          linkedin: "//www.linkedin.com",
          googlePlus: "//plus.google.com",
        },
      },
      {
        profileImage: "chetar-saini.jpg",
        profileTitle: "छित्तर सैनी",
        profileDesignation: "सदस्य",
        profileEmail: "",
        socialLinks: {
          facebook: "//www.facebook.com",
          twitter: "//www.twitter.com",
          linkedin: "//www.linkedin.com",
          googlePlus: "//plus.google.com",
        },
      },
      {
        profileImage: "team-3.jpg",
        profileTitle: "बलवीर सैनी",
        profileDesignation: "सदस्य",
        profileEmail: "",
        socialLinks: {
          facebook: "//www.facebook.com",
          twitter: "//www.twitter.com",
          linkedin: "//www.linkedin.com",
          googlePlus: "//plus.google.com",
        },
      },
      {
        profileImage: "manoj-bansal.jpg",
        profileTitle: "मनोज बंसल",
        profileDesignation: "सदस्य",
        profileEmail: "9518277640",
        socialLinks: {
          facebook: "//www.facebook.com",
          twitter: "//www.twitter.com",
          linkedin: "//www.linkedin.com",
          googlePlus: "//plus.google.com",
        },
      },
      {
        profileImage: "rajesh-kumar-jain.jpg",
        profileTitle: "राजेश जैन",
        profileDesignation: "सदस्य",
        profileEmail: "9728152449",
        socialLinks: {
          facebook: "//www.facebook.com",
          twitter: "//www.twitter.com",
          linkedin: "//www.linkedin.com",
          googlePlus: "//plus.google.com",
        },
      },
      {
        profileImage: "team-3.jpg",
        profileTitle: "परमजीत सिंह",
        profileDesignation: "सदस्य",
        profileEmail: "",
        socialLinks: {
          facebook: "//www.facebook.com",
          twitter: "//www.twitter.com",
          linkedin: "//www.linkedin.com",
          googlePlus: "//plus.google.com",
        },
      },
      {
        profileImage: "guman-singh.jpg",
        profileTitle: "घुम्मन सिंह",
        profileDesignation: "सदस्य",
        profileEmail: "7027009006",
        socialLinks: {
          facebook: "//www.facebook.com",
          twitter: "//www.twitter.com",
          linkedin: "//www.linkedin.com",
          googlePlus: "//plus.google.com",
        },
      },
      {
        profileImage: "Baba-sham-sundar.jpg",
        profileTitle: "बाबा श्याम सुंदर",
        profileDesignation: "सदस्य",
        profileEmail: "9992213196",
        socialLinks: {
          facebook: "//www.facebook.com",
          twitter: "//www.twitter.com",
          linkedin: "//www.linkedin.com",
          googlePlus: "//plus.google.com",
        },
      },
      {
        profileImage: "Bheem-saini.jpg",
        profileTitle: "भीम सैनी",
        profileDesignation: "सदस्य",
        profileEmail: "9992520223",
        socialLinks: {
          facebook: "//www.facebook.com",
          twitter: "//www.twitter.com",
          linkedin: "//www.linkedin.com",
          googlePlus: "//plus.google.com",
        },
      },
      {
        profileImage: "Bansi-saini.jpg",
        profileTitle: "बंसी सैनी",
        profileDesignation: "सदस्य",
        profileEmail: "",
        socialLinks: {
          facebook: "//www.facebook.com",
          twitter: "//www.twitter.com",
          linkedin: "//www.linkedin.com",
          googlePlus: "//plus.google.com",
        },
      },
    ];

    let Datalist = data.map((val, i) => {
      return (
        <div
          className="col-lg-3 col-sm-6 col-12 section-space--bottom--30"
          key={i}
        >
          <div className="team">
            <div className="image">
              <img src={`assets/img/team/${val.profileImage}`} alt="" />
            </div>
            <div className="content">
              <h3 className="title">{val.profileTitle}</h3>
              <span>{val.profileDesignation}</span>
              {val.profileEmail}
              {/* <a href={'mailto:'+val.profileEmail} className="email">{val.profileEmail}</a> */}
              {/* <div className="social">
                            <a href={val.socialLinks.facebook} className="facebook"><i className="fa fa-facebook" /></a>
                            <a href={val.socialLinks.twitter} className="twitter"><i className="fa fa-twitter" /></a>
                            <a href={val.socialLinks.linkedin} className="linkedin"><i className="fa fa-linkedin" /></a>
                            <a href={val.socialLinks.googlePlus} className="google"><i className="fa fa-google-plus" /></a>
                        </div> */}
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        {/*====================  team member area ====================*/}
        <div className="team-member-area ">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area text-center">
                  <h2 className="section-title section-space--bottom--50"></h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="team-member-wrapper">
                  <div className="row">
                    {/* team member list */}
                    {Datalist}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of team member area  ====================*/}
      </div>
    );
  }
}

export default TeamMemberGrid;
