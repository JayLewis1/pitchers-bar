import React from 'react'

 const Details = () => {
  return (
    <div className="details-wrapper">
      <span className="information">
      <span className='img-wrapper'>
       <img src="/assets/icons/phone.svg" alt="Phone"/>
      </span>
        <p>01291 428013</p>
      </span>
      <span className="information">
        <span className='img-wrapper'>
        <img className="email-icon" src="/assets/icons/email.svg" alt="Email"/>
        </span>
        <p>Pitcherssportsbarandgrill@gmail.com</p>
      </span>
      <span className="information address-wrapper">
      <span className='img-wrapper'>
        <img className="email-icon" src="/assets/icons/pin.svg" alt="Email"/>
        </span>
        <span>
          <p>First Floor,</p>
          <p>23 Beaufort Square,</p>
          <p>Chepstow,</p>
          <p>NP16 5EP</p>
        </span>
      </span>
    </div>
  )
}

export default Details; 


