import React, { useState } from 'react'
import { Link } from "gatsby"
// Redux
import { connect, ConnectedProps } from "react-redux";

interface ComponentState  {
  application : {
    toggle: boolean
  }
}

const mapState = (state: ComponentState ) => ({
  toggle: state.application.toggle
})
const mapDispatch = {
  toggleContact: (payload: boolean) => ({type: "CONTACT_TOGGLE", payload})
}

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux 

const Header = ({ toggle, toggleContact} : Props) => {
  const [menusDown, setMenusDown] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false)

  const openMenu = () => {
    console.log("Clicked");
    if(burgerMenu === false) {
      setBurgerMenu(true)
    } else {
      setBurgerMenu(false)
    }
  }

  return (
    <header className="header">
        <div className="wrapper">
          <Link to="/" className="logo">
            <img src="/assets/logo/logo@2x.jpg" alt="Pitchers Logo"/>  
          </Link>  
          <nav>
            <ul>
              <li><Link activeClassName="link-active" to="/">Home</Link></li>
              <li><Link activeClassName="link-active" to="/gallery">Gallery</Link></li>
              <li><Link activeClassName="link-active" to="/menus">Menus</Link></li>
              {/* <li>
                <button onClick={() => dropDownMenuSelection()}>Menus</button>
          
              { menusDown === true && 
                  <div className="menus-drop-down">
                    <div className="menu-triangle"></div>
                  <ul>
                    <li
                      onMouseOver={() => setTypeOnHover("food")}
                      onMouseOut={() => setTypeOnHover("")}
                    ><Link to="/menus">
                      { menuType === "food" ?  
                        <img src="/assets/menu/cutlery-p.svg" alt="Food"/>
                        :
                        <img src="/assets/menu/cutlery.svg" alt="Food"/>
                      }
                      <span>
                        <h2>Food</h2>
                        <p>Burgers, Pizza, Grill, vegetaraian and more.</p> 
                      </span>
                    </Link></li>
                    <li
                      onMouseOver={() => setTypeOnHover("drinks")}
                      onMouseOut={() => setTypeOnHover("")}
                    ><Link to="/menus">
                     { menuType === "drinks" ?  
                        <img src="/assets/menu/cocktail-p.svg" alt="Drinks"/>
                        :
                        <img src="/assets/menu/cocktail.svg" alt="Drinks"/>
                      }
                    <span>
                      <h2>Drinks</h2>
                      <p>Beers, Cocktails, Spirits and more.</p>  
                    </span>                   
                      </Link></li>
                  </ul>
                </div>
                }</li> */}
              <li className="contact-link">
                <Link to="/contact">
                  <span className="btn-bg"></span>
                  <p>Contact</p>
                </Link>
              </li>
            </ul>
          </nav>
          <span className="burger-menu">
            <button onClick={() => openMenu()}>
              {
                burgerMenu === false ? 
                 <img src="/assets/icons/burger-menu.svg" alt="Burger Menu"/>
                
                 :
                <img src="/assets/icons/burger-exit.svg" alt="Burger Exit"/>
              }
               
            </button>
          </span>
          <nav className="responsive-menu" 
              style={ burgerMenu === false ? {height: "0px"} : { height: "250px"}}
               > 
            <ul>
              <li><Link activeClassName="link-active" to="/">Home</Link></li>
              <li><Link activeClassName="link-active" to="/gallery">Gallery</Link></li>
              <li><Link activeClassName="link-active" to="/menus">Menus</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>   
    </header>
  )
}
export default connector(Header);
