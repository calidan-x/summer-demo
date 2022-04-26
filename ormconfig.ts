import { DataSource } from 'typeorm'
import { DBNamingStrategy } from '@summer-js/typeorm'

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  database: 'summer-db',
  username: 'root',
  password: 'root',
  namingStrategy: new DBNamingStrategy(),
  entities: ['./src/entity/**/*.ts']
})
