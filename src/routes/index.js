// import { render } from 'terezzu'


export const routes = [
  {
    regex: /^\/404$/,
    default: '#/404',
    mount: () => ({
      // component: appNotFound
    })
  },
  {
    regex: /^#\/$/,
    start: '#/',
    mount: () => {
      // render(appMessage, context)
      // const { appRoot: component } = await import('http://localhost:8081/main.js')
      // return { component: appMessage }
    }
  }
]
