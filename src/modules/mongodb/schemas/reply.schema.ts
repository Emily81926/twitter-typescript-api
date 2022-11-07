import * as mongoose from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { User } from './user.schema'
import { Tweet } from './tweet.schema'

export type ReplyDocument = mongoose.HydratedDocument<Reply>

@Schema()
export class Reply {
  @Prop({ required: true, maxLength: 256 })
  content: string

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Tweet' })
  tweet: Tweet
}

export const ReplySchema = SchemaFactory.createForClass(Reply)
