import { IsEmail, IsEmpty, IsNotEmpty, IsString } from "class-validator"

export class SignInDto{
    @IsEmail()
    @IsNotEmpty()
    email: string
    @IsString()
    @IsEmpty()
    password: string
    @IsString()
    @IsNotEmpty()
    auth_provider: string
}