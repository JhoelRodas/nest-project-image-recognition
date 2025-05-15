import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class CreateOrganizationDto {
    @IsString()
    @IsNotEmpty()
    name:string
    @IsString()
    @IsNotEmpty()
    plan_id: string
    @IsEmail()
    @IsNotEmpty()
    hostUser: string
}
