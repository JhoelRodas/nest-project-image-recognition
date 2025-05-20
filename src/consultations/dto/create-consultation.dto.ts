import { ApiProperty } from "@nestjs/swagger"
import { IsDate, IsNotEmpty, IsString } from "class-validator"

export class CreateConsultationDto {
    @ApiProperty({example:"motivo de la consulta"})
    @IsString()
    motivo: string
    @ApiProperty({example:"observaciones de la consulta"})
    @IsString()
    @IsNotEmpty()
    observaciones: string
    @ApiProperty({example:"ccbbdvs12.."})
    @IsString()
    @IsNotEmpty()
    organizationId: string
    @ApiProperty({example:"ccbcjj234..."})
    @IsString()
    @IsNotEmpty()
    patientId: string
    @ApiProperty({example:"sdsd3322..."})
    @IsString()
    @IsNotEmpty()
    userId: string
}


export class CreateDiagnosisToConsultationDto{
    @IsString()
    @IsNotEmpty()
    consultationId: string
    @IsString()
    @IsNotEmpty()
    diagnosisId: string
}

export class CreateTreatmentToConsultationDto{
    @IsString()
    @IsNotEmpty()
    consultationId: string
    @IsString()
    @IsNotEmpty()
    treatmentId: string
}