import { createState, html, css } from 'iares'

const template = ({ state }) => html`
  <div>
    <h1 class="teste" data-value="1" onClick=${() => window.alert()}>${state.title}</h1>
    <p>Teste</p>
    <ul>
      <li>texto</li>
      <li>texto</li>
      <li>texto</li>
    </ul>
  </div>
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

  const state = createState({
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