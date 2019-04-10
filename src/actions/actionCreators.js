import {CLICKY} from './actionTypes'

export const buttonClick = (message) => {
  return {
    type: CLICKY,
    text: message
  }
}
