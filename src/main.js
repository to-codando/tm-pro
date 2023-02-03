import { createApp, render, router } from 'terezzu'
import { appMain } from '@/components/appMain'

import { routes } from './routes'

const appHost = createApp({
  mount: async () => {
    render(appMain, document.body, context => {
      router({ routes, context }).init()
    })
  }
})

export { appHost }
