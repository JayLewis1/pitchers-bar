import { 
  Menu,
  MenuTypes,
  SET_MENU_TYPE
} from "../../actions/menu/types"

const initialState: Menu = {
  menuType: ""
}

export const menuReducer = (state: Menu = initialState, action : MenuTypes ) => {
  const { type, payload } = action;

  switch(type) {
    case SET_MENU_TYPE:
      return {
        ...state,
        menuType: payload
      }
    default : 
    return state
  }
}