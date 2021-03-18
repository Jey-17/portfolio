import React, { Component } from 'react';
import resumeData from '../resumeData';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'

const navItems = ['home', 'about', 'resume', 'works', 'workst']

export default class Header extends Component {

  state={
    showMobileMenu:false,
  }

  render() {
    const {showMobileMenu} = this.state
    const navClass = showMobileMenu ? 'nav' : 'nav hider'
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <div className="mobile-btn"
              onClick={()=>this.setState({showMobileMenu:!showMobileMenu})}>
            </div>
            {/* <div className="mobile-btn" href="#" title="Hide navigation">Hide navigation</div> */}
            <ul id="nav" className={navClass}>

            {/* <div currentClassName="current">
              <li><AnchorLink href="#section1">Home</AnchorLink></li>
              <li><AnchorLink href="#section2">About</AnchorLink></li>
              <li><AnchorLink href="#section3">Resume</AnchorLink></li>
              <li class="dropdown"><AnchorLink class="dropdown-toggle" data-toggle="dropdown" href="#">Works<span class="caret"></span></AnchorLink>
                <ul class="dropdown-menu">
                  <li><a href="#section41">NavCan</a></li>
                  <li><a href="#section42">RCS</a></li>
                </ul>
              </li>
            </div>*/}
              
              <Scrollspy items={navItems} currentClassName="current">
                {navItems.map((item,i)=>{
                  return <li key={i}><AnchorLink href={`#${item}`}>{capitalize(item)}</AnchorLink></li>
                })}
              </Scrollspy> 
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">{resumeData.name}</h1>
              <h3>I am a {resumeData.role}.&nbsp;{resumeData.roleDescription}
              </h3>
              <hr/>
              <ul className="social">
                {resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                  return(<li key={item.name}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.className}></i></a>
                  </li>)
                })}
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <AnchorLink href="#about"><i className="icon-down-circle"></i></AnchorLink>
          </p>

        </header>
      </React.Fragment>
    );
  }
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}