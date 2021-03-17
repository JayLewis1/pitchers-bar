import React, { useState } from 'react'
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
type Props = PropsFromRedux & {
  index : number 
  from: string
}

const GalleryPopup = ({index, toggleGallery,from }:Props ) => {
  const [imgIndex, setImgIndex] = useState(index);

  const changeImgLeft = () => {
      let newIndex = imgIndex - 1;
      if(from === "home" && newIndex < 1) {
        newIndex = 5;
        setImgIndex(newIndex);
      } else {
        setImgIndex(newIndex);
      }

      if(from === "gallery" && newIndex < 1) {
        newIndex = 29;
        setImgIndex(newIndex);
      } else {
        setImgIndex(newIndex);
      }
  } 
  const changeImgRight = () => {
    let newIndex = imgIndex + 1;
    if(from === "home" && newIndex > 5) {
      newIndex = 1;
      setImgIndex(newIndex);
    } else {
      setImgIndex(newIndex);
    }
    if(from === "gallery" && newIndex > 29) {
      newIndex = 1;
      setImgIndex(newIndex);
    } else {
      setImgIndex(newIndex);
    }
  }
  const exitGallery = () => {
    console.log("exit gallery");
    toggleGallery(false)
  }

  return (
    <div className="gallery-popup">
       { from === "home" &&  <img src={`/assets/photos/g${imgIndex}@2x.jpg`} alt="Gallery Item"/>}
          { from === "gallery" && <img src={`/assets/gallery/p${imgIndex}.jpg`} alt="Gallery Item"/>}
          <span className="button-wrapper">
          <button onClick={() => changeImgLeft()}>
            <img src="/assets/icons/arrow.svg" alt="Left arrow"/>
          </button>
              <button id="exit-btn" onClick={() => exitGallery()}>
                  <span className="btn-bg"></span>
                  <p>Exit</p>
              </button>
              <button id="right-arrow" onClick={() => changeImgRight()}>
                <img src="/assets/icons/arrow.svg" alt="Right arrow"/>
              </button>
            </span>
    </div>
  )
}
export default connector(GalleryPopup);