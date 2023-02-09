// import { createApp, render, router } from 'iares'
import { appMain } from '@/components/appMain'

// import { routes } from './routes'

// const appHost = createApp({
//   mount: async () => {
//     render(appMain, document.body, context => {
//       router({ routes, context }).init()
//     })
//   }
// })

// export { appHost }

import { createApp } from 'iares'

const appHost = createApp({
  onMount: (context) => {
    console.log(appMain, context)
  }
})

// console.log(appHost)

export { appHost }