import React, { Component } from 'react';

class About extends Component {

    render() {
        return ( 
        	<section className="About about-section">
                <div className="fadedBigHead"><h1 className="animated fadeIn">About Me</h1></div>
                <div className="columns about-columns">
                    <div className="column about-info">
                        <p>As a Front-end Developer building adaptable, user-friendly, responsive and intuitive websites are my forte.</p>
                        <p><span className="emphasis">W3C Standards</span>, <span className="emphasis">SEO Guidelines</span>, <span className="emphasis">Cross Browser Compatibility</span> and <span className="emphasis">Responsive Web Designs</span> are some key factors, I always keep in mind while hand-coding the websites.</p>
                        <p>My technical expertise also includes customizing themes of several popular CMS / eCommerce Frameworks. I actively seek out new technologies while keeping myself updated with modern industry trends.</p>
                        <p>When I am not working I spend time on <a href="https://medium.com/@vivekkupadhyay" name="Medium" title="Medium" target="_blank" rel="noopener noreferrer"><span className="emphasis">Medium</span></a>, watch Sit-Coms / Sci-Fi TV Series / Movies and play Counter Strike / FIFA.</p>
                    </div>
                    <div className="column about-skills">
                        <h2>
                            <span data-text="HTML5 / HTML, CSS3 / CSS and SCSS" className="text glitch-text">HTML5 / HTML, CSS3 / CSS and SCSS</span>
                            <span className="bar"></span>
                        </h2>
                        <h2>
                            <span data-text="React, Angular, Javascript, jQuery" className="text glitch-text">React, Angular, Javascript, jQuery</span>
                            <span className="bar"></span>
                        </h2>
                        <h2>
                            <span data-text="Twitter Bootstrap, Zurb Foundation" className="text glitch-text">Twitter Bootstrap, Zurb Foundation</span>
                            <span className="bar"></span>
                        </h2>
                        <h2>
                            <span data-text="GIT, BitBucket" className="text glitch-text">GIT, BitBucket</span>
                            <span className="bar"></span>
                        </h2>
                        <h2>
                            <span data-text="GULP, GRUNT" className="text glitch-text">GULP, GRUNT</span>
                            <span className="bar"></span>
                        </h2>
                        <h2>
                            <span data-text="Adobe Photoshop" className="text glitch-text">Adobe Photoshop</span>
                            <span className="bar"></span>
                        </h2>
                        <h2>
                            <span data-text="Wordpress, Prestashop, Magento, Drupal, Joomla, Shopify and dotCMS" className="text glitch-text">Wordpress, Prestashop, Magento, Drupal, Joomla, Shopify and dotCMS</span>
                            <span className="bar"></span>
                        </h2>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;