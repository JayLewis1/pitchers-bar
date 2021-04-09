import React, { Fragment } from 'react'

interface ComponentProps {
 name : string
 description: string
 price: number
 vegetarian: boolean
 size: {
   small: number
   medium: number
   large: number
 }
}

 const MenuItem = ({name, description, price, vegetarian, size} :ComponentProps ) => {

  const addingZeroToNum = (num: number) => {
    if(num === undefined) {
      return null;
    }
    let priceStr = JSON.stringify(num)
    if(priceStr.includes(".")) {
      let n = priceStr.split(".");        
      let sp = n[1].split("");
      let nPrice = sp[0] + sp[1];
      if(sp.length === 1) {
        nPrice = sp[0] + "0";
      } 
      return n[0] + "." + nPrice;
    } else  {
      return priceStr + "." + "00";
    }
  }

  return (
    <div className="menu-item">
            <span className="name-wrapper">
            { description !== "" ?
            <h4 className="item-name">{name}</h4> :
            <h4 className="item-name">{name}</h4>
            }
            { vegetarian  &&
            <p className="veggie">v</p>
            }
            {  size === undefined ?
               <p className="price">£{addingZeroToNum(price)}</p> 
               :
               <span className="price-by-size">
                 <p className="price">£{addingZeroToNum(size.small)}</p>
                 <p className="price">£{addingZeroToNum(size.medium)}</p>
                 {  size.large !== undefined &&
                    <p className="price">£{addingZeroToNum(size.large)}</p>
                 }
                
               </span>
            } 
          </span>
          <p className="description">{description}</p> 
    </div>
  )
}

export default MenuItem;