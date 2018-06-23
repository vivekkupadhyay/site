import React, { Component } from 'react';

class Landing extends Component {

    render() {
        return ( 
        	<section className="Landing introduction">
                <div>
                    <h1>Hi, I am <span className="emphasis">Vivek Upadhyay</span>.</h1>
                    <p>An ambitious and self-motivated <span className="emphasis">Front-End Developer</span> who has over <span className="emphasis">4+ years</span> of proactive work experience. I create <span className="emphasis">high performance</span> &amp; <span className="emphasis">rich interactive</span> websites using most of the <span className="emphasis">Modern Web Technologies</span>, that work across all the platforms &amp; devices.</p>
                </div>
                <div className="line linedown animated fadeInDown"><div className="linein animated slideInDownLine infinite"></div></div>
            </section>
        );
    }
}

export default Landing;