import { 
  GalleryTypes,
  Gallery,
  TOGGLE_GALLERY
} from "./types"

  export const toggleGallery = (payload:Gallery):GalleryTypes => {
  return {
    type: TOGGLE_GALLERY,
    payload: payload
  }
}