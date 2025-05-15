import { IsNotEmpty, IsString } from 'class-validator';

export class CreateOrganizationsMemberDto {
  @IsString()
  @IsNotEmpty()
  role: string;
  @IsString()
  @IsNotEmpty()
  organizationId: string;
  @IsString()
  @IsNotEmpty()
  userId: string;
}
