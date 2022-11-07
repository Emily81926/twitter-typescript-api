import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { 
  User,
  UserSchema,
  Tweet,
  TweetSchema,
  Reply,
  ReplySchema,
  Like,
  LikeSchema,
  Followship,
  FollowshipSchema
} from './schemas'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema }
    ]),
    MongooseModule.forFeature([
      { name: Tweet.name, schema: TweetSchema }
    ]),
    MongooseModule.forFeature([
      { name: Reply.name, schema: ReplySchema }
    ]),
    MongooseModule.forFeature([
      { name: Like.name, schema: LikeSchema }
    ]),
    MongooseModule.forFeature([
      { name: Followship.name, schema: FollowshipSchema }
    ])
  ],
  exports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema }
    ]),
    MongooseModule.forFeature([
      { name: Tweet.name, schema: TweetSchema }
    ]),
    MongooseModule.forFeature([
      { name: Reply.name, schema: ReplySchema }
    ]),
    MongooseModule.forFeature([
      { name: Like.name, schema: LikeSchema }
    ]),
    MongooseModule.forFeature([
      { name: Followship.name, schema: FollowshipSchema }
    ])
  ]
})
export class DatabaseModule { }