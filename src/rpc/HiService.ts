import { RpcClient, RpcProvider } from '@summer-js/summer'

@RpcClient('HI_SOURCE')
export class HiService {
  sayHi: () => Promise<void>
}
