import React, { useEffect, useState } from 'react'

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Details from "../components/contact/Details";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: ""
  })
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [toggleDetails, setToToggleDetails] = useState(false)

  useEffect(() => {
    if(formData.name !== "" && formData.email !== "" && formData.details !== "") {
      setBtnDisabled(false);
    }
  }, [formData.name, formData.email, formData.details, btnDisabled])


  const changeContactType = (e:any) => {
    e.preventDefault();
    if(toggleDetails) {
      setToToggleDetails(false)
    } else {
      setToToggleDetails(true)
    }
  }

  const onChange = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <div className="contact-container">
        <h3>Contact Form</h3>
      <div className="form-wrapper">
          <form action="https://formspree.io/f/xbjqjppp" method="POST"> 
          { toggleDetails &&
          <Details />
          }
            <span className="input-wrapper" style={toggleDetails === false ? {display: "flex"}: {display: "none"}}>
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
            <span className="input-wrapper" style={toggleDetails === false ? {display: "flex"}: {display: "none"}}>
              <label htmlFor="email">Email</label>
              <input 
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => onChange(e)}
                />
            </span>
            <span className="input-wrapper" style={toggleDetails === false ? {display: "flex"}: {display: "none"}}>
              <label htmlFor="details">Booking Details</label>
              <textarea 
                name="details"
                id="details"
                placeholder="Enter some details about your booking for example number of guests, date, time, etc."
                value={formData.details}
                onChange={(e) => onChange(e)}
                />
            </span>
            <span className="btn-wrapper" style={toggleDetails === false ? {display: "flex"}: {display: "none"}}>
              <button className="details-btn" onClick={(e) => changeContactType(e)}>
                <p>Want to our details instead?</p>
              </button>
              <button id="submit-btn" disabled={btnDisabled}>
                <span className="btn-bg"></span>
                <p>Send Booking</p>
              </button>
            </span>
            <span className="btn-wrapper" style={toggleDetails === false ? {display: "none"}: {display: "flex"}}>
              <button className="details-btn" onClick={(e) => changeContactType(e)}>
                <p>Want to use our form instead?</p>
              </button>
            </span>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Contact;