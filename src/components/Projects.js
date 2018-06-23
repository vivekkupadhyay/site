import React, { Component } from 'react';
import Insight from '../images/Insight_SS.png'
import Caraters from '../images/Caraters_SS.png'
import Olympus from '../images/Olympus_SS.png'
import Shoptiq from '../images/Shoptiq_SS.png'
import Oaks from '../images/Oaks_SS.png'
import Sinco from '../images/Sinco_SS.png'
import CloudSelect from '../images/CloudSelect_SS.png'
import DoctorAnywhere from '../images/DoctorAnywhere_SS.png'
import uParcel from '../images/uParcel_SS.png'
import Couturissimo from '../images/Couturissimo_SS.png'
import SmileSmith from '../images/SmileSmith_SS.png'

var sectionStyleInsight = {
  backgroundImage: "url(" + Insight + ")"
};
var sectionStyleCaraters = {
  backgroundImage: "url(" + Caraters + ")"
};
var sectionStyleOlympus = {
  backgroundImage: "url(" + Olympus + ")"
};
var sectionStyleShoptiq = {
  backgroundImage: "url(" + Shoptiq + ")"
};
var sectionStyleOaks = {
  backgroundImage: "url(" + Oaks + ")"
};
var sectionStyleSinco = {
  backgroundImage: "url(" + Sinco + ")"
};
var sectionStyleCloudSelect = {
  backgroundImage: "url(" + CloudSelect + ")"
};
var sectionStyleDoctorAnywhere = {
  backgroundImage: "url(" + DoctorAnywhere + ")"
};
var sectionStyleuParcel = {
  backgroundImage: "url(" + uParcel + ")"
};
var sectionStyleCouturissimo = {
  backgroundImage: "url(" + Couturissimo + ")"
};
var sectionStyleSmileSmith = {
  backgroundImage: "url(" + SmileSmith + ")"
};


class Projects extends Component {

    constructor() {
        super();
        this.state = {
            shown: true,
            isToggleOn: true
        };
    }   
    
    toggle() {
        this.setState(function(prevState) {
            return {
                isToggleOn: !prevState.isToggleOn,
                shown: !this.state.shown
            };
        });
    }
        
    render() {
        var shown = {
            display: this.state.shown ? "inline-block" : "none"
        };
        
        var hidden = {
            display: this.state.shown ? "none" : "flex"
        }

        return ( 
        	<section className="Projects project-section">
                <a href="https://www.insight.com" rel="noopener noreferrer" target="_blank" className="columns has-text-left project-box">
                    <div className="column project-image">
                        <div className="project-image_box pull-right" style={sectionStyleInsight}></div>
                        <p><span className="emphasis">eCommerce</span>, <span className="emphasis">Front-End Development</span></p>
                    </div>
                    <div className="column project-info">
                        <div className="project-layer">
                            <h2>Insight</h2>
                            <p>Insight is a leader in providing smart, cutting-edge technology solutions for global organizations of all sizes.</p>
                            <p><span className="emphasis">Bootstrap</span>, <span className="emphasis">AngularJS</span>, <span className="emphasis">HTML5</span>, <span className="emphasis">Video</span>, <span className="emphasis">CSS3</span>, <span className="emphasis">jQuery</span>, <span className="emphasis">BitBucket</span></p>
                        </div>
                    </div>
                </a>
                <a href="http://www.caraters.com" rel="noopener noreferrer" target="_blank" className="columns has-text-right project-box">
                    <div className="column project-image">
                        <div className="project-image_box pull-left" style={sectionStyleCaraters}></div>
                        <p><span className="emphasis">eCommerce</span>, <span className="emphasis">Theme Development</span></p>
                    </div>
                    <div className="column project-info">
                        <div className="project-layer">
                            <h2>Caraters</h2>
                            <p>Caraters, Diamonds in Pairs is the world’s first Online Company, which is fully dedicated to matching pairs.</p>
                            <p><span className="emphasis">Prestashop</span>, <span className="emphasis">Bootstrap</span>, <span className="emphasis">HTML5</span>, <span className="emphasis">CSS3</span>, <span className="emphasis">jQuery</span>, <span className="emphasis">GIT</span></p>
                        </div>
                    </div>
                </a>
                <a href="http://www.olympusimage.com.sg" rel="noopener noreferrer" target="_blank" className="columns has-text-left project-box">
                    <div className="column project-image">
                        <div className="project-image_box pull-right" style={sectionStyleOlympus}></div>
                        <p><span className="emphasis">eCommerce</span>, <span className="emphasis">Theme Development</span></p>
                    </div>
                    <div className="column project-info">
                        <div className="project-layer">
                            <h2>Olympus</h2>
                            <p>Olympus Corporation is a Japanese manufacturer of optics and reprography products.</p>
                            <p><span className="emphasis">Magento</span>, <span className="emphasis">Bootstrap</span>, <span className="emphasis">HTML5</span>, <span className="emphasis">CSS3</span>, <span className="emphasis">jQuery</span>, <span className="emphasis">GIT</span></p>
                        </div>
                    </div>
                </a>
                <a href="https://www.shoptiq.com.sg" rel="noopener noreferrer" target="_blank" className="columns has-text-right project-box">
                    <div className="column project-image">
                        <div className="project-image_box pull-left" style={sectionStyleShoptiq}></div>
                        <p><span className="emphasis">eCommerce</span>, <span className="emphasis">Theme Development</span></p>
                    </div>
                    <div className="column project-info">
                        <div className="project-layer">
                            <h2>Shoptiq</h2>
                            <p>Shoptiq is an eCommerce solution designed for small businesses by Singtel.</p>
                            <p><span className="emphasis">Drupal</span>, <span className="emphasis">Bootstrap</span>, <span className="emphasis">HTML5</span>, <span className="emphasis">CSS3</span>, <span className="emphasis">jQuery</span>, <span className="emphasis">GIT</span></p>
                        </div>
                    </div>
                </a>
                <a href="https://www.oaks.com.sg" rel="noopener noreferrer" target="_blank" className="columns has-text-left project-box">
                    <div className="column project-image">
                        <div className="project-image_box pull-right" style={sectionStyleOaks}></div>
                        <p><span className="emphasis">eCommerce</span>, <span className="emphasis">Front-End Development</span></p>
                    </div>
                    <div className="column project-info">
                        <div className="project-layer">
                            <h2>Oaks</h2>
                            <p>Oaks is an icon in the Singapore Wine business, known for her impeccable service, sound retail and distribution strategies in the management of wine shops.</p>
                            <p><span className="emphasis">Bootstrap</span>, <span className="emphasis">HTML5</span>, <span className="emphasis">CSS3</span>, <span className="emphasis">jQuery</span>, <span className="emphasis">GIT</span></p>
                        </div>
                    </div>
                </a>
                <a href="http://www.sinco.com.sg" rel="noopener noreferrer" target="_blank" className="columns has-text-right project-box" style={ hidden }>
                    <div className="column project-image">
                        <div className="project-image_box pull-left" style={sectionStyleSinco}></div>
                        <p><span className="emphasis">Marketing</span>, <span className="emphasis">Front-End Development</span></p>
                    </div>
                    <div className="column project-info">
                        <div className="project-layer">
                            <h2>Sinco</h2>
                            <p>Sinco Technologies is a leading integrated manufacturer of Plastic, Elstomer, Metal, Secondary Processes and Assembly.</p>
                            <p><span className="emphasis">Bootstrap</span>, <span className="emphasis">HTML5</span>, <span className="emphasis">CSS3</span>, <span className="emphasis">Video</span>, <span className="emphasis">jQuery</span>, <span className="emphasis">GIT</span></p>
                        </div>
                    </div>
                </a>
                <a href="#!" rel="noopener noreferrer" className="columns has-text-left project-box" style={ hidden }>
                    <div className="column project-image">
                        <div className="project-image_box pull-right" style={sectionStyleCloudSelect}></div>
                        <p><span className="emphasis">eCommerce</span>, <span className="emphasis">Theme Development</span></p>
                    </div>
                    <div className="column project-info">
                        <div className="project-layer">
                            <h2>CloudSelect</h2>
                            <p>Cloud Service Brokerage and Cloud Management solution – from the ground up to meet the needs of both enterprise cloud customers and IT-Service Providers.</p>
                            <p><span className="emphasis">Prestashop</span>, <span className="emphasis">Bootstrap</span>, <span className="emphasis">HTML5</span>, <span className="emphasis">CSS3</span>, <span className="emphasis">jQuery</span>, <span className="emphasis">GIT</span></p>
                        </div>
                    </div>
                </a>
                <a href="https://www.doctoranywhere.com" rel="noopener noreferrer" target="_blank" className="columns has-text-right project-box" style={ hidden }>
                    <div className="column project-image">
                        <div className="project-image_box pull-left" style={sectionStyleDoctorAnywhere}></div>
                        <p><span className="emphasis">Medical Services</span>, <span className="emphasis">Front-End Development</span></p>
                    </div>
                    <div className="column project-info">
                        <div className="project-layer">
                            <h2>Doctor Anywhere</h2>
                            <p>Doctor Anywhere harnesses the convenience, power and simplicity of today’s digital age to bring you much needed, on-demand medical care services right to your doorstep.</p>
                            <p><span className="emphasis">Code Igniter</span>, <span className="emphasis">Bootstrap</span>, <span className="emphasis">HTML5</span>, <span className="emphasis">CSS3</span>, <span className="emphasis">Canvas</span>, <span className="emphasis">jQuery</span>, <span className="emphasis">GIT</span></p>
                        </div>
                    </div>
                </a>
                <a href="https://www.uparcel.sg" rel="noopener noreferrer" target="_blank" className="columns has-text-left project-box" style={ hidden }>
                    <div className="column project-image">
                        <div className="project-image_box pull-right" style={sectionStyleuParcel}></div>
                        <p><span className="emphasis">Delivery Services</span>, <span className="emphasis">Front-End Development</span></p>
                    </div>
                    <div className="column project-info">
                        <div className="project-layer">
                            <h2>uParcel</h2>
                            <p>uParcel provides the ease of fast, affordable and reliable deliveries.</p>
                            <p><span className="emphasis">Code Igniter</span>, <span className="emphasis">Bootstrap</span>, <span className="emphasis">HTML5</span>, <span className="emphasis">CSS3</span>, <span className="emphasis">jQuery</span>, <span className="emphasis">GIT</span></p>
                        </div>
                    </div>
                </a>
                <a href="https://www.couturissimo.com" rel="noopener noreferrer" target="_blank" className="columns has-text-right project-box" style={ hidden }>
                    <div className="column project-image">
                        <div className="project-image_box pull-left" style={sectionStyleCouturissimo}></div>
                        <p><span className="emphasis">eCommerce</span>, <span className="emphasis">Theme Development</span></p>
                    </div>
                    <div className="column project-info">
                        <div className="project-layer">
                            <h2>Couturissimo</h2>
                            <p>COUTURíSSIMO is a groundbreaking online fashion experience that will extend the reach of global, best-in-class designers by providing a bridge between couture and ready-to-wear.</p>
                            <p><span className="emphasis">Magento</span>, <span className="emphasis">Bootstrap</span>, <span className="emphasis">HTML5</span>, <span className="emphasis">CSS3</span>, <span className="emphasis">Video</span>, <span className="emphasis">jQuery</span>, <span className="emphasis">GIT</span></p>
                        </div>
                    </div>
                </a>
                <a href="https://www.smilesmith.dental" rel="noopener noreferrer" target="_blank" className="columns has-text-left project-box m-b-0" style={ hidden }>
                    <div className="column project-image">
                        <div className="project-image_box pull-right" style={sectionStyleSmileSmith}></div>
                        <p><span className="emphasis">Medical Equipment Services</span>, <span className="emphasis">Front-End Development</span></p>
                    </div>
                    <div className="column project-info">
                        <div className="project-layer">
                            <h2>SmileSmith</h2>
                            <p>SMILESMITH is a Collaborative Dental Marketplace whose reach is rapidly expanding through the Asia Pacific Region.</p>
                            <p><span className="emphasis">Bootstrap</span>, <span className="emphasis">HTML5</span>, <span className="emphasis">CSS3</span>, <span className="emphasis">jQuery</span>, <span className="emphasis">GIT</span></p>
                        </div>
                    </div>
                </a>                
                <a href="#!" title="More Projects" rel="noopener noreferrer" name="More Projects" className="button" data-text="More Projects" onClick={this.toggle.bind(this)} style={ shown }><span>More Projects</span></a>
            </section>
        );
    }
}

export default Projects;