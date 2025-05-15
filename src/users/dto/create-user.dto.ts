import { IsEmail, IsEmpty, IsNotEmpty, IsString } from "class-validator"

export class CreateUserDto {
    id: string
    @IsEmail()
    @IsNotEmpty()
    email: string
    @IsString()
    @IsEmpty()
    password: string
}
