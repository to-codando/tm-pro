import model from './model'
import view from './view'
import controller from './controller'

export const appHello = (state) => ({
  state,
  model,
  view,
  controller
})
