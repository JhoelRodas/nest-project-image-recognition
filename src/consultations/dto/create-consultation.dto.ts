import { IsDate, IsNotEmpty, IsString } from "class-validator"

export class CreateConsultationDto {
    @IsDate()
    @IsNotEmpty()
    consultationDate: Date
    @IsString()
    motivo: string
    @IsString()
    @IsNotEmpty()
    observaciones: string
    @IsString()
    @IsNotEmpty()
    organizationId: string
    @IsString()
    @IsNotEmpty()
    patientId: string
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