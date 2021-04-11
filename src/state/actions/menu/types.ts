export const SET_MENU_TYPE = "SET_MENU_TYPE"

export interface Menu {
    menuType: string
}

interface setMenuType {
  type:typeof SET_MENU_TYPE,
  payload: Menu
}

export type MenuTypes = setMenuType;