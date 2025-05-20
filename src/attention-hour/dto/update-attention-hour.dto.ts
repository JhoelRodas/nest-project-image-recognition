import { PartialType } from '@nestjs/swagger';
import { CreateAttentionHourDto } from './create-attention-hour.dto';

export class UpdateAttentionHourDto extends PartialType(CreateAttentionHourDto) {}
