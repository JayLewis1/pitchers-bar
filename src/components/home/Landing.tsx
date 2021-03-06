import React, { Fragment, useEffect, useRef } from 'react'
import { Link, useStaticQuery, graphql } from "gatsby";
// import Img from "gatsby-image"

const Landing: React.FC  = () => {
  const logoImage = useRef(null);

  const data = useStaticQuery(graphql`
  query MyQuery {
    file(relativePath: {eq: "logo.png"}) {
      childImageSharp {
        fluid {
          aspectRatio
          base64
          sizes
          src
          srcSet
          tracedSVG
        }
      }
    }
  }
`)
  useEffect(() => {
    console.log(logoImage)
  }, [logoImage])

  return (
    <Fragment>
    <div className="hero-wrapper">
      <div className="center-wrapper">
        <div className="img-wrapper">
          <img src="/assets/photos/home-img@2x.jpg" alt="Our Bar"/>
        </div>
        <div className="text-wrapper">
        {/* <Img className="home-logo" fluid={data.file.childImageSharp.fluid} alt="Pitchers logo" /> */}
          <img 
            src="/assets/logo/logo@2x.jpg" 
            alt="Pitchers Logo"
            ref={logoImage}/> 
            {/* { logoImage!.current! !== null  && 
              <span style={logoImage!.current!.img.loaded ? {display: "none"} : {display: "flex"} }>
              </span>
            } */}
          <ul className="link-wrapper">
          <li>
            <Link to="/menus" className="highlight">
              <span className="btn-bg"></span>
              <p>View menus</p>
            </Link></li>
            <li className="no-bg">
            <a href="#booking">
              <span className="btn-bg"></span>
              <p>Make a booking</p></a>
          </li>
          <li className="no-bg" id="hideBtn">
            <a href="#info">
              <span className="btn-bg"></span>
              <p>Bar information</p></a>
          </li>
        </ul>
        </div>
      </div>
    </div>
    </Fragment>
  )
}

export default Landing;