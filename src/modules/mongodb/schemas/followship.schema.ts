import * as mongoose from 'mongoose'

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { User } from './user.schema'

export type FollowshipDocument = mongoose.HydratedDocument<Followship>

@Schema()
export class Followship {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  follower: User

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  following: User

  @Prop({ default: Date.now() })
  createAt: Date
}

export const FollowshipSchema = SchemaFactory.createForClass(Followship)
