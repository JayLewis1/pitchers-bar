import React from 'react'
import { Link } from "gatsby";

const Menus: React.FC = () => {
  return (
    <div className="menu-home-container">
      <h3>Menus</h3>
      <div className="menu-split">
      <div className="wrapper">
          <span className="img-wrapper">
            <img src="/assets/photos/burger1.jpg" alt="Burger"/>
          </span>
          <span className="text-wrapper">
            <p className="heading">Burgers, Steak and vegetarian options</p>
            <p className="menus-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend, risus ac ullamcorper. </p>
            <Link to="/menus/food">
              <span className="btn-bg"></span>
              <p>View Menu</p>
              </Link>
          </span>
        </div>
        <div className="wrapper">
          <span className="img-wrapper">
            <img src="/assets/photos/cocktail1.jpg" alt="Cocktails"/>
          </span>
          <span className="text-wrapper">
            <p  className="heading" >Cocktails, Pitchers, Spirits and more</p> 
            <p className="menus-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend, risus ac ullamcorper. </p>
            <Link to="/menus/drinks">
              <span className="btn-bg"></span>
              <p>View Menu</p>
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Menus;