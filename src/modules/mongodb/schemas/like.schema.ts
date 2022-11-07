import * as mongoose from 'mongoose'

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { User } from './user.schema'

import { Tweet } from './tweet.schema'

export type LikeDocument = mongoose.HydratedDocument<Like>

@Schema()
export class Like {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Tweet' })
  tweet: Tweet

  @Prop({ default: Date.now() })
  createAt: Date
}

export const LikeSchema = SchemaFactory.createForClass(Like)
