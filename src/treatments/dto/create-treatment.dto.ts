import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class CreateTreatmentDto {
    @ApiProperty({example:"...."})
    @IsString()
    @IsNotEmpty()
    description: string
    @ApiProperty({example:"5 dias"})
    @IsString()
    @IsNotEmpty()
    duration: string
    @ApiProperty({example:"...."})
    @IsString()
    @IsNotEmpty()
    instructions: string
    @ApiProperty({example:"abcbdhe1..."})
    @IsString()
    @IsNotEmpty()
    organizationId: string
}
