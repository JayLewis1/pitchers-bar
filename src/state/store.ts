import { createElement } from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { load } from 'redux-localstorage-simple';
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";
// State
import { Application } from "./actions/application/types";
import { Gallery } from "./actions/gallery/types";

export interface InitialState {
  application: Application,
  gallery: Gallery
}

const middleware = [thunk]
// export const store = createStore(rootReducer, initialState, compose(composeWithDevTools(applyMiddleware(...middleware))))

const store = (preloadedState : InitialState) => {
  return createStore(
    rootReducer,
    getLoadedState(preloadedState),
    composeWithDevTools(applyMiddleware(...middleware))
  )
}
const getLoadedState = (preloadedState: InitialState | any) => {
  if (typeof window !== 'undefined')
    return {
      ...preloadedState,
    }

  return {
    ...preloadedState,
  }
}


export default store;
