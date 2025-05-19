import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator"

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

export class SignInPatientDto{
    @ApiProperty({example:"swagger@gmail.com"})
    @IsEmail()
    @IsNotEmpty()
    email:string
    @ApiProperty({example:"123456789"})
    @IsNumber()
    @IsNotEmpty()
    ci:number
}