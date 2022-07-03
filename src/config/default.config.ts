import { RpcConfig, ServerConfig } from '@summer-js/summer'
import { SwaggerConfig } from '@summer-js/swagger'

export const SERVER_CONFIG: ServerConfig = {
  port: 8801,
  basePath: '/hello-service'
}

export const SWAGGER_CONFIG: SwaggerConfig = {
  docPath: '/swagger',
  info: { title: 'Hello Service', version: '1.0.0' }
}

export const RPC_CONFIG: RpcConfig = {
  client: {
    RPC_SOURCE: {
      url: 'https://demo.summerjs.com/hi-service',
      accessKey: 'xxxxx'
    }
  }
}
