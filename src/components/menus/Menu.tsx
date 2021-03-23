import React from 'react'
import MenuSection from "./MenuSection";

interface ComponentProps {
 name : string
 sections: any
}

 const Menu = ({name, sections} :ComponentProps ) => {
  return (
    <div className="menu-wrapper">
    <h2 className="menu-name">{name}</h2>
    {sections.map((s: any)=> (
      <MenuSection
      key={s.name}
      name={s.name}
      items={s.items}
      />
    ))}
  </div>
  )
}

export default Menu;