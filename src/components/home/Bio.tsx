import React from 'react'
import { Link } from "react-router-dom";

const Bio: React.FC = () => {
  return (
    <div className="bio-container">
      <div className="img-wrapper">
        <img src="/assets/photos/bio-img@2x.jpg" alt="The bar"/>
      </div>
      <div className="text-wrapper">
        <h2>Who are we</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend, risus ac ullamcorper scelerisque, libero Consectetur adipiscing elit. Cras eleifend, risus ac ullamcorper scelerisque, libero ipsum aliquam turpis, ac dapibus velit nisl eu magna.</p>
        <Link to="/contact">
          <span className="btn-bg"></span>
          <p>Get in contact</p>
        </Link>
      </div>
    </div>
  )
}
export default Bio;