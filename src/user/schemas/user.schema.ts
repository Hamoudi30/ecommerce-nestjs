import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
	@Prop({
		type: String,
		required: true,
		min: [3, 'Name is too short'],
		max: [30, 'Name is too long'],
	})
	name: string;

  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  email: string; 

  @Prop({
    type: String,
    required: true,
    min: [6, 'Password is too short'],
    max: [30, 'Password is too long'],
  })
  password: string;

  @Prop({
    type: String,
    required: true,
    default: 'user',
    enum: ['user', 'admin'],
  })
  role: string;

  @Prop({
    type: String
  })
  avatar: string;

  @Prop({
    type: Number,
  })
  age: number;

  @Prop({
    type: String,
  })
  phoneNumber: string;

  @Prop({
    type: String,
  })
  address: string;

  @Prop({
    type: Boolean,
    enum: [true, false],
  })
  isActive: boolean;

  @Prop({
    type: String,
  })
  verificationCode:   string;
  
  @Prop({
    type: String,
    enum: ['male', 'female'],
  })
  gender: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
