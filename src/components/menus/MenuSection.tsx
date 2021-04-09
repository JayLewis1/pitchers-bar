import React, {Fragment} from 'react'
import MenuItem from "./MenuItem";
import PriceTitles from "./PriceTitles";
interface ComponentProps {
 name : string
 items: any
}

 const MenuSection = ({name, items} :ComponentProps ) => {
  return (
      <div className="menu-section">
        <PriceTitles 
            name={name}
        />
      {items.map((item: any) => (
          <MenuItem
          key={item.name}
          name={item.name}
          price={item.price}
          description={item.description}
          vegetarian={item.vegetarian}
          size={item.size}
          />
      ))}
    </div>
  )
}

export default MenuSection;