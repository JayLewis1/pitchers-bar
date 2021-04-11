import React, { useState, Fragment } from 'react'
import MenuSection from "./MenuSection";

interface ComponentProps {
 name : string
 sections: any
}

 const Menu = ({name, sections} :ComponentProps ) => {
  const [sectionName, setSectionName] = useState(sections[0].name);
   const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSectionName(e.target.value)
   } 

  return (
    <div className="menu-wrapper">
      <select className="section-selector" value={sectionName} onChange={(e) => onChange(e)}>
      {sections.map((s: any, index:number)=> (
        <option key={s.name} value={s.name}>{s.name}</option>
      ))}
      </select>
    {sections.map((s: any,index:number)=> (
      <Fragment key={index}>
        { s.name ===  sectionName  && 
          <MenuSection
            key={s.name + index}
            name={s.name}
            items={s.items}
          />
        }
      </Fragment>
    ))}
  </div>
  )
}

export default Menu;