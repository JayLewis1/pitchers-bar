import React, { useState, useEffect, Fragment } from 'react'
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import Menu from "../components/menus/Menu";

import { connect, ConnectedProps } from "react-redux";

const breakfastMenu =  require("../../menus/food/breakfast.json");
const mainMenu =  require("../../menus/food/main.json");
const drinksMenu =  require("../../menus/drinks/drinks.json");

interface ComponentProps {
  menu : {
    menuType: string
  }
}

const mapState = (state: ComponentProps) => ({
  menuType: state.menu.menuType
})
const mapDispatch = ({
  setMenuTypes: (mtype : string) => ({type: "SET_MENU_TYPE", payload: mtype })
})
const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux


const Menus = ({menuType, setMenuTypes}: Props) => {
  const [menuSelection, setMenuSelection] = useState("breakfast");

  useEffect(() => {
    // If redux state is "food" then then setMenuSelection("food");
    if(menuType !== "") {
      setMenuSelection(menuType);
    }
console.log(menuType)
    return () => {
      // set redux func to empty string
      setMenuTypes("")
    }
  },[menuType])

  return (
    <Layout>
      <Seo title="menus" />
      <div className="menu-select-container">
        <h3 className="menu-title">Menus</h3>
        <span className="menu-selection">
            <button 
              className={menuSelection === "breakfast" ? "selected" : ""}
              onClick={() => setMenuSelection("breakfast")} >
              <span className="btn-bg"></span>
              <p>Breakfast</p>
            </button>
            <button 
              className={menuSelection === "main" ? "selected" : ""}
              onClick={() => setMenuSelection("main")} >
            <span className="btn-bg"></span>
              <p>Main Menu</p>
            </button>
            <button
              className={menuSelection === "drinks" ? "selected" : ""}
              onClick={() => setMenuSelection("drinks")} >
            <span className="btn-bg"></span>
              <p>Drinks</p>
            </button>
        </span>
      </div>
    <div className="menus-container">
      {  menuSelection === "breakfast" &&  
      <Fragment>   
        {breakfastMenu.map((m: any) => (
        <Menu key={m.name} name={m.name} sections={m.sections} />
       ))}
      </Fragment> 
      }
      {  menuSelection === "main" &&  
      <Fragment>   
        {mainMenu.map((m: any) => (
        <Menu key={m.name} name={m.name} sections={m.sections} />
       ))}
      </Fragment> 
      }
        {  menuSelection === "drinks" &&  
      <Fragment>   
        {drinksMenu.map((m: any) => (
        <Menu key={m.name} name={m.name} sections={m.sections} />
       ))}
      </Fragment> 
      }
    </div>
    </Layout>
  )
}

export default connector(Menus);