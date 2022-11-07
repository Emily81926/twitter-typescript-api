import * as mongoose from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { User } from './user.schema'

export type FollowshipDocument = mongoose.HydratedDocument<Followship>

@Schema()
export class Followship {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  follower: User

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  following: User
}

export const FollowshipSchema = SchemaFactory.createForClass(Followship)
