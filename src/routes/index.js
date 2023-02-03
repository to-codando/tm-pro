import { appNotFound } from '@/components/appNotFound'

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
    mount: async () => {
      const { appRoot: component } = await import('http://localhost:8081/main.js')
      return { component }
    }
  }
]
