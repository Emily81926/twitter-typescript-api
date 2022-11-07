import { Module } from '@nestjs/common'

import { UserController } from './user.controller'
import { UserService } from './user.service'
import { DatabaseModule } from '../mongodb/database'

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
