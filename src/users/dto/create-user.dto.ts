import { IsEmail, IsEmpty, IsNotEmpty, IsString } from "class-validator"

export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    email: string
    @IsString()
    @IsEmpty()
    password: string
}
