'use strict'

import Koa from 'koa'
import Router from 'koa-router'

import { data } from './functions/constants'

const koa = new Koa()
const app = new Router()

app.get('/', async (ctx) => {

})

koa.use(app.routes())
koa.listen(3000)
