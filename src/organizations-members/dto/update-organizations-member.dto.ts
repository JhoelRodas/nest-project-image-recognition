import { PartialType } from '@nestjs/swagger';
import { CreateOrganizationsMemberDto } from './create-organizations-member.dto';

export class UpdateOrganizationsMemberDto extends PartialType(CreateOrganizationsMemberDto) {}
