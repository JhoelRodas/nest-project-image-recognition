import { IsNotEmpty, IsString } from "class-validator"

export class CreateSubscriptionDto {
    @IsString()
    @IsNotEmpty()
    organizationId: string
    @IsString()
    @IsNotEmpty()
    planId: string
}
