import { combineReducers } from "redux";

import { galleryReducer } from "./gallery/reducer";
import { applicationReducer } from "./application/reducer";

export const rootReducer =  combineReducers({
  gallery: galleryReducer,
  application: applicationReducer
})

export type RootState = ReturnType<typeof rootReducer>