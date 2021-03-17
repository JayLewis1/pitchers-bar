import React from 'react'

const WhatsOn = () => {
  return (
    <div className="whatson-container" id="whatson">
        <h5>What's going on</h5>
        <ul className="carousel-wrapper">
            <li>
              <span className="img-wrapper">
                <img src="/assets/whatson/wo1@2x.jpg" alt="Whats on image"/>
                <span className="date-con">
                <p>Closed</p>
                </span>
              </span>
              <span className="text-wrapper">
                <p className="whatson-title">We are currently closed</p>
                <p className="whatson-subtitle">Due to Covid-19 we are closed but we'll let you know when we are open again.</p>
                <button>
                  <span className="btn-bg"></span>
                  <p>Get in contact</p></button>
              </span>
            </li>
        </ul>
    </div>
  )
}

export default WhatsOn;