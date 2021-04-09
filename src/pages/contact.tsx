import React, { useState } from 'react'

import Layout from "../components/layout/layout";
import SEO from "../components/seo";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: ""
  })
  const [toggleDetails, setToToggleDetails] = useState(false)
  const onChange = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  const changeContactType = (e:any) => {
    e.preventDefault();
    if(toggleDetails) {
      setToToggleDetails(false)
      console.log(toggleDetails)
    } else {
      setToToggleDetails(true)
      console.log(toggleDetails)
    }
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <div className="contact-container">
        <h3>Contact Form</h3>
      <div className="form-wrapper">
          <form action="https://formspree.io/f/xbjqjppp" style={toggleDetails === false ? {display: "none"}: {display: "flex"}}> 
            <span className="input-wrapper">
              <label htmlFor="name">Name</label>
              <input 
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => onChange(e)}
                />
            </span>
            <span className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input 
                type="text"
                name="_replyto"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => onChange(e)}
                />
            </span>
            <span className="input-wrapper">
              <label htmlFor="details">Booking Details</label>
              <textarea 
                name="details"
                id="details"
                placeholder="Enter some details about your booking for example number of guests, date, time, etc."
                value={formData.details}
    
                onChange={(e) => onChange(e)}
                />
            </span>
            <span className="btn-wrapper">
              <button className="details-btn" onClick={(e) => changeContactType(e)}>
                <p>Want to our details instead?</p>
              </button>
              <button id="submit-btn">
                <span className="btn-bg"></span>
                <p>Send Booking</p>
              </button>
            </span>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Contact;