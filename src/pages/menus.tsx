import React, { useState, useEffect } from 'react'
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import Menu from "../components/menus/Menu";

const breakfastMenu =  require("../../menus/food/breakfast.json");

const Menus = () => {
  const [menuSelection, setMenuSelection] = useState("");
  return (
    <Layout>
      <Seo title="menus" />
    <div className="menus-container">
      <h3>Change the menu selection</h3>
      <span className="button-wrapper">
          <button onClick={() => setMenuSelection("food")} >
            <span className="btn-bg"></span>
            <p>Food</p>
          </button>
          <button onClick={() => setMenuSelection("drinks")} >
          <span className="btn-bg"></span>
            <p>Drinks</p>
          </button>
      </span>
      <div className="menu-selection-wrapper">
        { menuSelection === "food" && <p>Food Menus</p> }
        { menuSelection === "drinks" && <p>Drinks Menus</p> }
      </div>
      {breakfastMenu.map((m: any) => (
        <Menu key={m.key} name={m.name} sections={m.sections} />
      ))}
    </div>
    </Layout>
  )
}

export default Menus;