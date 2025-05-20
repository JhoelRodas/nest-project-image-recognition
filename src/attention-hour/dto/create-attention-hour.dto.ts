import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsString } from "class-validator";

export class CreateAttentionHourDto {
    @ApiProperty({example:"[lunes,miercoles,viernes]"})
    days: string[];
    @ApiProperty({example:"2024-08-25T10:30:00.000Z"})
    @IsDateString()
    @IsNotEmpty()
    startTime: Date;
    @ApiProperty({example:"2024-08-25T10:30:00.000Z"})
    @IsDateString()
    @IsNotEmpty()
    endTime: Date;
    @ApiProperty({example:"scdcdc332..."})
    @IsString()
    @IsNotEmpty()
    organizationId:string
}

export class AddAttHourUser{
    @ApiProperty({example:"cdcdcdc333..."})
    @IsString()
    @IsNotEmpty()
    userId: string
    @ApiProperty({example:"cdcdcdc333..."})
    @IsString()
    @IsNotEmpty()
    attentionHourId: string
}
