import { Module } from '@nestjs/common'
import { TweetService } from './tweet.service'
import { TweetController } from './tweet.controller'

import { DatabaseModule } from '../mongodb/database'

@Module({
  imports: [DatabaseModule],
  controllers: [TweetController],
  providers: [TweetService]
})
export class TweetModule {}
