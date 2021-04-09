import React, { useState,useEffect, Fragment } from 'react'

interface ComponentProps {
  name : string
}

const PriceTitles = ({name} : ComponentProps) => {
  const [priceTitles, setTitles]  = useState({
    small: "",
    medium: "",
    large : ""
  })

  useEffect(() => {
    settingPriceTitles(name)
    console.log(name)
  },[name])

const settingPriceTitles = (pName:string) => {
  switch(pName) {
    case "Draught" :
      setTitles({
        small: "half",
        medium: "pint",
        large : "jug"
      })    
      console.log(priceTitles);
      break;
    case "Bottles" :
        setTitles({
          small: "single",
          medium: "bucket",
          large : ""
        })    
        break;
    case "Wine" :
        setTitles({
          small: "175ml",
          medium: "250ml",
          large : "bottle"
        })    
        break;
    case "Vodka" :
        setTitles({
          small: "single",
          medium: "double",
          large : ""
        })    
        break;
    case "Brandy" :
          setTitles({
            small: "single",
            medium: "double",
            large : ""
          })    
          break;
    case "Gin" :
            setTitles({
              small: "single",
              medium: "double",
              large : ""
            })    
            break;
    case "Whiskey" :
              setTitles({
                small: "single",
                medium: "double",
                large : ""
              })    
              break;
    case "Rum" :
                setTitles({
                  small: "single",
                  medium: "double",
                  large : ""
                })    
                break;
    case "Other" :
                  setTitles({
                    small: "single",
                    medium: "double",
                    large : ""
                  })    
                  break;
    case "Soft Drinks" :
                    setTitles({
                      small: "half",
                      medium: "standard",
                      large : "pint"
                    })    
                    break;
  }
}

  

  return (
    <div className="price-titles" id={name === "Draught" ? "draught-price" : name === "Wine" ? "wine-price" : ""}>
      { priceTitles.small !== "" ?
      <Fragment>
        <p>{priceTitles.small}</p>
        <p>{priceTitles.medium}</p>
        { priceTitles.large !== "" && 
          <p>{priceTitles.large}</p>
        }
      </Fragment>
        : 
        <p className="price-title">Price</p>
    }
    </div>
  )
}

export default PriceTitles;