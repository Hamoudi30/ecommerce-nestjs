import {
	IsEmail,
	IsEnum,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsPhoneNumber,
	IsString,
	IsUrl,
	Length,
	MaxLength,
	MinLength,
} from 'class-validator';

export class CreateUserDto {
	@IsString({ message: 'Name must be string' })
	@MaxLength(30, { message: 'Name is too long' })
	@MinLength(3, { message: 'Name is too short' })
	@IsNotEmpty({ message: 'Name is required' })
	name: string;

	@IsEmail({}, { message: 'Email must be string' })
	@IsNotEmpty({ message: 'Email is required' })
	email: string;

	@IsString({ message: 'Password must be string' })
	@IsNotEmpty({ message: 'Password is required' })
	password: string;

	@IsEnum(['user', 'admin'], { message: 'Role must be user or admin' })
	@IsNotEmpty({ message: 'Role is required' })
	role: string;

	@IsString({ message: 'Avatar must be string' })
	@IsUrl({}, { message: 'Avatar must be URL' })
	@IsOptional()
	avatar: string;

	@IsNumber({}, { message: 'Age must be number' })
	age: number;

	@IsPhoneNumber('EG', { message: 'Phone number must be string' })
	@IsOptional()
	phoneNumber: string;

	@IsString({ message: 'Address must be string' })
	@IsOptional()
	address: string;

	@IsString({ message: 'Address must be string' })
	@IsEnum([true, false], { message: 'isActive must be boolean' })
	isActive: boolean;

	@IsString({ message: 'Verification code must be string' })
	@Length(6, 6, { message: 'Verification code must be 6 characters' })
	@IsNotEmpty({ message: 'Verification code is required' })
	verificationCode: string;

	@IsEnum(['male', 'female'], { message: 'Gender must be male or female' })
	@IsNotEmpty({ message: 'Gender is required' })
	gender: string;
}
