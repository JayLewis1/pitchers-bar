export const TOGGLE_GALLERY = "TOGGLE_GALLERY"

export interface Gallery {
    toggle: boolean
}

interface toggleGallery {
  type:typeof TOGGLE_GALLERY,
  payload: Gallery
}

export type GalleryTypes = toggleGallery;