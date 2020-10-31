import ModalVideo from 'react-modal-video'
import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
class VedioGalary extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false,
          currentVideoId : null 
        }
        this.openModal = this.openModal.bind(this)
      }
      updateVideoId(currentVideoId){
        this.setState({currentVideoId});
        this.openModal();
      }
      openModal () {
        this.setState({isOpen: true})
      }
    render(){

        let data = [
            {img: 'youtube.png',vedioId:'4Hvb741AUXs' , serviceExcerpt: 'शिव नन्दीशाला द्वारा आत्मनिर्भर बनने की ओर बढ़ते कदम।'},
            {img: 'youtube.png',vedioId:'1kjAurBlj1s' , serviceExcerpt: 'आइए जानिए कैसे नंदीशाला टोहाना में हुई नन्दी पक्षी विहार की स्थापना।'},
            {img: 'youtube.png',vedioId:'toxn_GQMbhs' , serviceExcerpt: 'नंदीशाला टोहाना में नन्दी बायो कंपोस्ट व नंदी कीटनाशक तैयार किया जाता है।'},
            {img: 'youtube.png',vedioId:'sw4IhzLyL4o' , serviceExcerpt: 'नंदीशाला टोहाना पर एक नजर । देखे कैसे रखे जाते है गौवंश यहां'},
            {img: 'youtube.png',vedioId:'4sVW-m7CvTc' , serviceExcerpt: 'नंदीशाला टोहाना में बिन माँ के छोटे बछड़े की देखभाल करते हुए'},
            {img: 'youtube.png',vedioId:'gv_QmBzefIE' , serviceExcerpt: 'नंदीशाला टोहाना पहुँचे डीएसपी विरम सिंह'},
            {img: 'youtube.png',vedioId:'LXuyVGOKsxg' , serviceExcerpt: 'हरियाणा की मॉडल नंदीशाला की नींव रखने वाले डॉ जे के आभीर के साथ कुछ सुनहरी पल'},
            {img: 'youtube.png',vedioId:'241dBN8zBI' , serviceExcerpt: 'नंदी पक्षी विहार टोहाना में चल रहा है तोते का इलाज । इस प्यारे से तोते का नाम हमने हरमन रखा है। अब     '},
            
        ];

        let Datalist = data.map((val, i) => {
            return(
                <div className="col-lg-4 col-md-6 col-12 section-space--bottom--30" key={i}>
                    <div className="about-image-two">
                        <img src={`assets/img/logo/${val.img}`} alt="" />
                            <span className="video-popup">
                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.state.currentVideoId} onClose={() => this.setState({isOpen: false})} />
                                <button onClick={()=>{this.updateVideoId(val.vedioId)}} >
                                    <i className="ion-ios-play-outline" />
                                </button>
                            </span>
                        </div>
                        <div className="service-grid-item__content">
                        <h3 className="title">
                        {/* <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>{val.serviceTitle}</a> */}
                        </h3>
                        <h4 className="subtitle">{val.serviceExcerpt}</h4>
                        {/* <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`} className="see-more-link">SEE MORE</a> */}
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
                                    <h1>वीडियो गैलरी</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">होम</a></li>
                                        <li>वीडियो गैलरी</li>
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

export default VedioGalary;