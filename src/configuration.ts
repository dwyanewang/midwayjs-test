import {createConfiguration, hooks} from '@midwayjs/hooks'
import {MidwayConfig} from '@midwayjs/core'
import * as Koa from '@midwayjs/koa'
import Test from './test'

/**
 * setup midway server
 */
export default createConfiguration({
  imports: [Koa, hooks({middleware: [Test]})],
  importConfigs: [
    {
      default: {
        keys: 'session_keys',
        koa: {
          port: 7002,
        },
      } as MidwayConfig,
    },
  ],
})
