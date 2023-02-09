import { render } from 'terezzu'
import { appNotFound } from '@/components/appNotFound'
import  { appRoot as appMessage  } from 'app-message'

export const routes = [
  {
    regex: /^\/404$/,
    default: '#/404',
    mount: () => ({
      component: appNotFound
    })
  },
  {
    regex: /^#\/$/,
    start: '#/',
    mount: async (context) => {
      render(appMessage, context)
      // const { appRoot: component } = await import('http://localhost:8081/main.js')
      return { component: appMessage }
    }
  }
]
