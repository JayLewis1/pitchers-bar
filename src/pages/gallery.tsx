import React, { useState, useEffect } from "react"
// Components
import Layout from "../components/layout/layout";
import SEO from "../components/seo"
import GalleryPopup from "../components/home/GalleryPopup";
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


const Gallery = ({gallery, toggleGallery} : Props) => {
  const [galleryImages, setImgageUrls] = useState([{url: "", loaded: false}])
  const [imgIndex, setImgIndex] = useState(0);

    useEffect(() => {
    populateWithImgUrls()
  },[])

  const openImagePopup = (imgUrl: string) => {
    let index: number;
    for(let x = 0; x < galleryImages.length; x++) {
        if(galleryImages[x].url === imgUrl) {
          index = galleryImages.indexOf(galleryImages[x]);
          setImgIndex(index+1);
          toggleGallery(true);
        } 
    }
  }

  const populateWithImgUrls = () => {
    let imgUrlArray: any = []
    for(let x = 1; x <= 29; x++ ){
      let newObject = {
        url : `/assets/gallery/p${x}.jpg`,
        loaded: false 
      }
      imgUrlArray.push(newObject)
    }; 
    setImgageUrls(imgUrlArray)
  }

  const setLoadedImg = (img:any) => {
    let editableArray = [...galleryImages];
    let index: number;
    let loadedObject = {
      url : img.url,
      loaded: true
    }

    for(var x = 0; x < editableArray.length; x++ ) {
      if(editableArray[x].url === img.url ) {
        index = editableArray.indexOf(editableArray[x])
        editableArray.splice(index, 1, loadedObject)
        setImgageUrls(editableArray);
      }
    }
  }
return (
  <Layout>
    <SEO title="Gallery" />
    <div className="gallery-container">
        <div className="wrapper">
          <h3>Pitchers photo gallery</h3>
          <ul className="gallery-grid">
            { galleryImages && galleryImages.map((img) => 
            <li 
                key={img.url} className="gallery-image"
                style={img.loaded === true ? { minHeight: "0" } : { minHeight: "200px" }}>
              <div  
                className="img-placeholder"
                style={img.loaded === true ? { display: "none" } : { display: "block" }}></div>
              <img 
                style={img.loaded === false ? { display: "none" } : { display: "inline-block" }}
                src={img.url} alt="Gallery Item"
                onLoad={() => setLoadedImg(img)} /> 
              <span className="img-hover">
                <button className="gallery-link"
                  onClick={() => openImagePopup(img.url)} >
                  <span className="btn-bg"></span>
                  <p>View photo</p>
                 </button>
              </span>
             
            </li>
            )}
          </ul> 
        </div>
        { gallery.toggle === true &&
           <GalleryPopup index={imgIndex} from={"gallery"}/> 
        }
    </div>
  </Layout>
)
} 

export default connector(Gallery);
