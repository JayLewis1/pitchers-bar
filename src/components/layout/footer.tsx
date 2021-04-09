import React, { useState } from 'react'
import { Link } from "gatsby";

const Footer = () => {
  const [iconHover, setIconHover] = useState({type: ""})
  return (
    <div className="footer">
      <div className="wrapper"> 
        <div className="center-container">
          <div className="list-wrapper">
            <p className="heading">Navigation</p>
            <ul>
              <li><Link activeClassName="footer-active-link" to="/">Home</Link></li>
              <li><Link activeClassName="footer-active-link" to="/gallery">Gallery</Link></li>
              <li><Link activeClassName="footer-active-link" to="/menus">Menus</Link></li>
              <li><Link activeClassName="footer-active-link" to="/contact">contact</Link></li>
            </ul>
          </div>
          <div className="list-wrapper" id="contact-list">
            <p className="heading">Contact</p>
            <ul>
              <li><p>01291 428013</p></li>
              <li><p>Pitcherssportsbarandgrill@gmail.com</p></li>
            </ul>
            <span className="social-container">
                <a href="/https://www.facebook.com/pitcherssportsbarchepstow" 
                  onMouseOver={() => setIconHover({type:"facebook"})}
                  onMouseOut={() => setIconHover({type:""})}
                >
                  <img src={`/assets/icons/facebook${iconHover.type === "facebook" ? "-hover" : ""}.svg`}  alt="Facebook"/>
                </a>
                <a href="/https://twitter.com/GrillPitchers?fbclid=IwAR1DheqOt8GBR_dqqv8c4LIrZ8IqEsTFkRXsTUf9rek-Z6bwWieVdN4Srfc"
                  onMouseOver={() => setIconHover({type:"twitter"})}
                  onMouseOut={() => setIconHover({type:""})}>
                  <img src={`/assets/icons/twitter${iconHover.type === "twitter" ? "-hover" : ""}.svg`}  alt="Twitter"/>
                </a>
            </span>
          </div>
        </div>
        <div className="smallprint">
            <p>All rights reserved</p>
            <p className="push-right">Designed and developed by <a href="https://www.jaylewis.me/" target="_blank" rel="noreferrer" className="highlight">Jay Lewis</a></p>
          </div>
      </div>
    </div>
  )
}
export default Footer;
