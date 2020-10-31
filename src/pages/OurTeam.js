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
class OurTeam extends Component{

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
                                    <h1>
हमारी टीम</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">
होम</a></li>
                                        <li>टीम</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of breadcrumb area  ====================*/}
                <TeamMemberGrid/>
                <div >
                {/*About section start*/}
               
                
                
               

                </div>


                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}


export default OurTeam;