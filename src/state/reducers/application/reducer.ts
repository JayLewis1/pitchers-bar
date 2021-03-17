import { 
  ApplicationTypes,
  Application,
  CONTACT_TOGGLE
 } from "../../actions/application/types";

const initialState:Application = {
    toggle: false
}

export const applicationReducer = (state:Application = initialState, action: ApplicationTypes  ) => {
  const { type, payload } = action;

  switch(type) {
    case CONTACT_TOGGLE :
      return {
        ...state,
        toggle: payload,
      }
    default:
      return state;
  }
}