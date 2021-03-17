import { 
  ApplicationTypes,
  Application,
  CONTACT_TOGGLE
} from "./types"

  export const toggleContact = (payload:Application):ApplicationTypes => {
  return {
    type: CONTACT_TOGGLE,
    payload: payload
  }
}