import {Api, Get, Post, useContext} from '@midwayjs/hooks'
import type {Context} from '@midwayjs/koa'

export default Api(Get('/'), async () => {
  const ctx = useContext<Context>()
  return {
    message: 'Hello World!',
    ip: ctx.ip,
  }
})

export const test = Api(Post('/api/test'), async () => {
  const ctx = useContext()

  return {
    message: 'Hello World!',
    ip: ctx.ip,
  }
})
