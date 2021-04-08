import React from 'react'
import MenuItem from "./MenuItem";

interface ComponentProps {
 name : string
 items: any
}

 const MenuSection = ({name, items} :ComponentProps ) => {
  return (
      <div className="menu-section">
      {/* <h3 className="section-name">{name}</h3> */}
      {items.map((item: any) => (
        <MenuItem
        key={item.name}
        name={item.name}
        price={item.price}
        description={item.description}
        vegetarian={item.vegetarian}
        />
      ))}
    </div>
  )
}

export default MenuSection;