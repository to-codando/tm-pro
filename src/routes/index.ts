// import { render } from 'iares'

// import { appDefault } from '@/components/appDefault'
// import { appHeader } from '@/components/appHeader'
// import { appHome } from '@/components/appHome'
// import { appMenu } from '@/components/appMenu'

// export const routes = [
//   {
//     regex: /^\/404$/,
//     default: '#/404',
//     mount: async () => ({
//       component: appDefault
//     })
//   },
//   {
//     regex: /^#\/$|^#\/home$/,
//     start: '#/',
//     mount: async () => ({
//       component: appHome
//     }),
//     afterMount: (context) => {
//       render(appHeader, context, (parentContext) => {
//         render(appMenu, parentContext)
//       })
//       // console.log(context)
//     }
//   }
// ]
