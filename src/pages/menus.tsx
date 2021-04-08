import React, { useState, useEffect, Fragment } from 'react'
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import Menu from "../components/menus/Menu";

const breakfastMenu =  require("../../menus/food/breakfast.json");
const mainMenu =  require("../../menus/food/main.json");
const drinksMenu =  require("../../menus/drinks/drinks.json");

const Menus = () => {
  const [menuSelection, setMenuSelection] = useState("breakfast");
  return (
    <Layout>
      <Seo title="menus" />
    <div className="menus-container">
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

export default Menus;