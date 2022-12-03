import { Module } from '@nestjs/common'

import { AdminController } from './admin.controller'
import { AdminService } from './admin.service'
import { DatabaseModule } from '../mongodb/database'

@Module({
  imports: [DatabaseModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}


