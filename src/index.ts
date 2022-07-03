import AWSXRay from 'aws-xray-sdk'
import { summerStart, handler } from '@summer-js/summer'
import './auto-imports'
export { handler }

summerStart({
  async before(config) {
    if (['dev', 'prod'].includes(process.env.SUMMER_ENV)) {
      AWSXRay.captureMySQL(require('mysql'))
      AWSXRay.captureHTTPsGlobal(require('http'))
      AWSXRay.captureHTTPsGlobal(require('https'))
    }
  },
  after(config) {}
})
