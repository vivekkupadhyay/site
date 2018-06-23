import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return ( 
        	<footer className="Footer footer-section clearfix">
                <div className="copyright">Made with <i className="fa fa-heart"></i> by <span className="emphasis">Vivek Upadhyay</span> using <span className="emphasis">React</span>, <span className="emphasis">CSS3</span>, <span className="emphasis">HTML5</span> and <span className="emphasis">JavaScript</span>.<br className="visible-mb" /> &copy; {(new Date().getFullYear())} All Rights Reserved</div>
            </footer>
        );
    }
}

export default Footer;