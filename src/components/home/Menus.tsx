import React from 'react'
import { connect, ConnectedProps } from "react-redux";
import { navigate } from "@reach/router"  

interface ComponentProps {
}

const mapDispatch = ({
  setMenuTypes: (mtype : string) => ({type: "SET_MENU_TYPE", payload: mtype })
})

const connector = connect(null, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

const Menus = ({setMenuTypes}:Props) => {

  const setMenuTypeAndPushToPage = (mType: string) => {
    setMenuTypes(mType);
    navigate("/menus")
  }

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
            <p className="menus-info">Our menu offers a variety of food such as breakfast, pub classics, grill, burgers and a kids menu too.</p>
            <button onClick={() => setMenuTypeAndPushToPage("main")}>
              <span className="btn-bg"></span>
              <p>View Menu</p>
            </button>
          </span>
        </div>
        <div className="wrapper">
          <span className="img-wrapper">
            <img src="/assets/photos/cocktail1.jpg" alt="Cocktails"/>
          </span>
          <span className="text-wrapper">
            <p  className="heading" >Cocktails, Pitchers, Spirits and more</p> 
            <p className="menus-info">Cocktails 2 for £10, range of draught beers and ciders, spirits and of course soft drinks for the designated drivers.</p>
            <button onClick={() => setMenuTypeAndPushToPage("drinks")}>
              <span className="btn-bg"></span>
              <p>View Menu</p>
            </button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default connector(Menus);