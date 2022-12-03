import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"

import { Model } from "mongoose"

import { Tweet, TweetDocument } from "../mongodb/schemas"

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Tweet.name) private readonly tweetModel: Model<TweetDocument>
  ) {}

  getTweets() {
    return this.tweetModel.find()
  }
}
