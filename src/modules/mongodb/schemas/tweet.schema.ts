import * as mongoose from 'mongoose'

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { User } from './user.schema'

export type TweetDocument = mongoose.HydratedDocument<Tweet>

@Schema()
export class Tweet {
  @Prop({ required: true, maxLength: 256 })
  description: string

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User

  @Prop({ default: Date.now() })
  createAt: Date
}

export const TweetSchema = SchemaFactory.createForClass(Tweet)
