import { ServerConfig } from '@summer-js/summer'
import { SwaggerConfig } from '@summer-js/swagger'

export const SERVER_CONFIG: ServerConfig = {
  port: 8801
}

export const SWAGGER_CONFIG: SwaggerConfig = {
  docPath: '/swagger',
  info: { title: 'Summer' }
}
