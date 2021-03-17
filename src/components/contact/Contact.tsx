import React from 'react'
// Redux
import { connect, ConnectedProps } from "react-redux";

interface ComponentState  {
  application : {
    toggle: boolean
  }
}

const mapState = (state:ComponentState ) => ({
  toggle: state.application.toggle
})
const mapDispatch = {
  toggleContact: (payload: boolean) => ({type: "CONTACT_TOGGLE", payload})
}

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux 

 const Contact = ({toggleContact}:Props) => {

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit")
  }
  return (
    <div className="contact-container"> 
      <h3>Contact us</h3>
      <p>Use the form below or reach us on any of our contact information to ask any questions or want to make a booking.</p>
      <form onSubmit={(e) => onSubmit(e)}>
        <span className="input-wrapper">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name"/>
        </span>
        <span className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Enter your email"/>
        </span>
        <span className="input-wrapper">
          <label htmlFor="details">Details or question</label>
          <textarea  id="details" name="details" placeholder="Enter some details about your booking for example how many guests, date and time, etc. Or just ask a question for us." />
        </span>
        <input type="submit" value="send form">
        </input>
      </form>
      <button className="cancel-btn" onClick={() => toggleContact(false)}>Cancel</button>
    </div>
  )
}
export default connector(Contact);