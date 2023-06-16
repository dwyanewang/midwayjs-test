import {useContext} from '@midwayjs/hooks'
import {Context} from '@midwayjs/koa'

export default async (next: any) => {
  const ctx = useContext<Context>()
  console.log(111, ctx.request.body)

  await next()

  console.log(222, ctx.request.body)
}
