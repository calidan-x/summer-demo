import { HiService } from './../rpc/HiService'
import { AutoInject, Controller, Get, Post } from '@summer-js/summer'
import { ApiDoc, ApiDocGroup } from '@summer-js/swagger'

@Controller
@ApiDocGroup('欢迎相关接口')
@AutoInject
export class HelloController {
  hiService: HiService

  @Get
  @ApiDoc('获取欢迎字符串')
  hello() {
    return 'Hello Summer ~~'
  }

  @Post
  @ApiDoc('向HiService打招呼')
  sayHelloToHiService() {
    console.log('~~~~~~')
    this.hiService.sayHi('hi')
  }

  @Get('/error')
  @ApiDoc('错误的请求')
  error() {
    throw new Error('error')
  }
}
