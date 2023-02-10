import { createState, html, css } from 'iares'

const template = ({ state }) => html`
  <h1>${state.title}</h1>
`

const styles = () => css``

const hooks = () => {
  const beforeMount = () => {}

  return { beforeMount }
}

const actions = () => {

  const logger = () => {}

  return { logger }
}


export const appMain = () => {

  const state =  createState({
    title: 'Initial title'
  })

  return {
    state,
    template,
    styles,
    hooks,
    actions
  }

}