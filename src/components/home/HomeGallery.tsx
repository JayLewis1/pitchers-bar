import React, { useState } from 'react'
import { Link } from "gatsby";
// Components
import GalleryPopup from "./GalleryPopup";
//Redux
import { connect, ConnectedProps } from "react-redux";

interface ComponentProps {
  gallery: {
    toggle: boolean
  }
}

const mapState = (state:ComponentProps ) => ({
  gallery: state.gallery
})

const mapDispatch = {
  toggleGallery : (payload: boolean) => ({type: "TOGGLE_GALLERY", payload: payload})
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

const HomeGallery = ({gallery, toggleGallery} : Props) => {
  const [imgIndex, setImgIndex] = useState(0);

  const openImagePopup = (img: number) => {
    setImgIndex(img);
    toggleGallery(true);
  }
  
  return (
    <div className="gallery-home-container" id="gallery">
        <div className="wrapper">
          <ul className="gallery-grid">
            <li className="item-1 gallery-image">
              <img src="/assets/photos/g1@2x.jpg" alt="Our bar"/>
              <span className="img-hover">
                <button className="gallery-link"
                  onClick={() => openImagePopup(1)}>
                  <span className="btn-bg"></span>
                  <p>View photo</p>
                 </button>
              </span>
            </li>
            <li className="item-2 gallery-image">
              <img src="/assets/photos/g2@2x.jpg" alt="Food"/>
              <span className="img-hover">
                <button className="gallery-link"
                 onClick={() => openImagePopup(2)}>
                  <span className="btn-bg"></span>
                  <p>View photo</p>
                 </button>
              </span>
            </li>
            <li className="item-3 gallery-image">
              <img src="/assets/photos/g3@2x.jpg" alt="Our Bar"/>
              <span className="img-hover">
                <button className="gallery-link"
                 onClick={() => openImagePopup(3)}>
                  <span className="btn-bg"></span>
                  <p>View photo</p>
                 </button>
              </span>
            </li>
            <li className="item-4 gallery-image">
              <img src="/assets/photos/g4@2x.jpg" alt="Cocktails"/>
              <span className="img-hover">
                <button className="gallery-link"
                onClick={() => openImagePopup(4)}>
                  <span className="btn-bg"></span>
                  <p>View photo</p>
                 </button>
              </span>
            </li>
            <li className="item-5  gallery-image">
              <img src="/assets/photos/g5@2x.jpg" alt="Chicken wings"/>
              <span className="img-hover">
                <button className="gallery-link"
                  onClick={() => openImagePopup(5)}>
                  <span className="btn-bg"></span>
                  <p>View photo</p>
                 </button>
              </span>
            </li>
          </ul>
            <Link to="/gallery" className="gallery-link">
            <span className="btn-bg"></span>
            <p>View More</p>
          </Link>
        </div>
        { gallery.toggle === true &&
           <GalleryPopup index={imgIndex} from={"home"}/> 
        }
    </div>
  )
}

export default connector(HomeGallery);