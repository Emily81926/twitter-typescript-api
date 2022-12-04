import { Controller, Get } from '@nestjs/common'
import { TweetService } from './tweet.service'
import TweetResponse from './tweet.interface'

@Controller('tweet')
export class TweetController {
  constructor(private readonly tweetService: TweetService) {}
  @Get()
  async findAll() : Promise<TweetResponse[]> {
    return await this.tweetService.findAll()
  }
}
