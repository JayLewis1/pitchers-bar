import {
  Menu,
  MenuTypes,
  SET_MENU_TYPE
} from "./types"

export const setMenuTypes = (payload:Menu):MenuTypes => {
  return {
    type: SET_MENU_TYPE,
    payload: payload
  }
}