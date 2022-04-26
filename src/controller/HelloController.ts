import { Controller, Get } from '@summer-js/summer'
import { ApiDoc, ApiDocGroup } from '@summer-js/swagger'

@Controller
@ApiDocGroup('欢迎相关接口')
export class HelloController {
  @Get
  @ApiDoc('获取欢迎字符串')
  hello() {
    return 'Hello Summer ~~~'
  }
}
