import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import TweetResponse from './tweet.interface'

import { Model } from 'mongoose'

import {
	Tweet,
	TweetDocument,
} from '../mongodb/schemas'

@Injectable()
export class TweetService {
	constructor (
		@InjectModel(Tweet.name) private readonly tweetModel: Model<TweetDocument>
	) { }
	
  async findAll() : Promise<TweetResponse[]> {

		return await this.tweetModel.find({}, '-__v').populate('user', '-__v')
  }
}
