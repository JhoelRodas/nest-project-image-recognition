import { IsString, IsOptional, IsDate, IsInt, IsEmail } from 'class-validator';

export class CreatePatientDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  aPaternal?: string;

  @IsString()
  @IsOptional()
  aMaternal?: string;

  @IsString()
  sexo: string;

  @IsDate()
  birthDate: Date;

  @IsInt()
  phone: number;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  organizationId: string;
}
