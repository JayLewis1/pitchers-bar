import React, { Fragment } from 'react'

interface ComponentProps {
 name : string
 description: string
 price: string
 vegetarian: boolean
}

 const MenuItem = ({name, description, price, vegetarian} :ComponentProps ) => {
  return (
    <div className="menu-item">
            <span className="name-wrapper">
            { description !== "" ?
            <h4 className="item-name">{name}</h4> :
            <h4 className="description">{name}</h4>
            }
            { vegetarian  &&
            <p className="veggie">v</p>
            }
            <p className="price">£{price.toString()}</p>  
          </span>
          <p className="description">{description}</p> 
    </div>
  )
}

export default MenuItem;