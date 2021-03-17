export const CONTACT_TOGGLE = "CONTACT_TOGGLE"

export interface Application {
    toggle: boolean
}

interface toggleContact {
  type:typeof CONTACT_TOGGLE,
  payload: Application
}

export type ApplicationTypes = toggleContact;