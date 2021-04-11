import { combineReducers } from "redux";

import { galleryReducer } from "./gallery/reducer";
import { applicationReducer } from "./application/reducer";
import { menuReducer } from "./menu/reducer";

export const rootReducer =  combineReducers({
  gallery: galleryReducer,
  application: applicationReducer,
  menu: menuReducer
})

export type RootState = ReturnType<typeof rootReducer>