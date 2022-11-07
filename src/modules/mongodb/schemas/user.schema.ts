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

  @Prop({ required: true, unique: true, maxLength: 1024 })
  email: string

  @Prop({ required: true, unique: true, maxLength: 64})
  account: string

  @Prop({ maxLength: 1024, default: '' })
  introduction: string

  @Prop({ maxLength: 256, default: '' })
  avatarImg: string

  @Prop({ maxLength: 256, default: '' })
  coverImg: string

  @Prop({ enum: RoleType, default: RoleType.user })
  role: RoleType

  @Prop({ default: Date.now() })
  createAt: Date
}

export const UserSchema = SchemaFactory.createForClass(User)
