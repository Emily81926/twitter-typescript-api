import * as mongoose from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { RoleType } from 'src/types'

export type UserDocument = mongoose.HydratedDocument<User>

@Schema()
export class User {
  @Prop({ required: true, maxLength: 64 })
  name: string

  @Prop({ required: true, maxLength: 256 })
  password: string

  @Prop({ required: true, maxLength: 1024 })
  email: string

  @Prop({ required: true, maxLength: 64 })
  account: string

  @Prop({ required: true, maxLength: 1024 })
  introduction: string

  @Prop({ required: true, maxLength: 256 })
  avatarImg: string

  @Prop({ required: true, maxLength: 256 })
  coverImg: string

  @Prop({ required: true, enum: RoleType, default: RoleType.user })
  role: RoleType
}

export const UserSchema = SchemaFactory.createForClass(User)
