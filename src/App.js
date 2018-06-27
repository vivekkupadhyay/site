import React, { Component } from 'react';
import Spirals from './components/Spirals'
import Landing from './components/Landing'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'
import './App.css';

class App extends Component {

  // fake authentication Promise
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 2000))
  }

  componentDidMount(){
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        // fade out
        ele.classList.add('available')
        document.getElementById('site-body').classList.remove('loading-screen')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
  }

  render() {
    return (
      <main className="App wrapper">
        <nav className="contact-me">
            <a href="https://drive.google.com/file/d/0B00jdfNVqt4pUHpwWXN4cnFCNkE/view?usp=sharing" name="My Résumé" title="My Résumé" target="_blank" rel="noopener noreferrer"><i className="fa fa-file-pdf-o"></i></a>
            <a href="https://www.linkedin.com/in/vivekkupadhyay" name="LinkedIn" title="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
            <a href="https://github.com/vivekkupadhyay" name="GitHub" title="GitHub" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
            <a href="http://stackoverflow.com/users/4763084/vivekkupadhyay" name="Stack Overflow" title="Stack Overflow" target="_blank" rel="noopener noreferrer"><i className="fa fa-stack-overflow"></i></a>
            <a href="http://codepen.io/vivekkupadhyay/" name="Codepen" title="Codepen" target="_blank" rel="noopener noreferrer"><i className="fa fa-codepen"></i></a>
            <a href="https://twitter.com/vivekkupadhyay" name="Twitter" title="Twitter" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
            <a href="mailto:vk.vivekupadhyay@gmail.com?Subject=May%20the%20force%20be%20with%20you!"><i className="fa fa-envelope-o" name="Mail: Vivek Upadhyay" title="Mail: Vivek Upadhyay"></i></a>
        </nav>
        <Spirals />
        <Landing />
        <Projects />
        <About />
        <Footer />
      </main>
    );
  }
}

export default App;
