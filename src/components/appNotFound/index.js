import { createComponent } from 'terezzu'

import model from './model'
import view from './view'
import controller from './controller'

const name = 'appNotFound'
const app = { name, model, view, controller }
const appNotFound = createComponent(app)

export { appNotFound }
