import { Module } from '@nestjs/common';
import { AttentionHourService } from './attention-hour.service';
import { AttentionHourController } from './attention-hour.controller';

@Module({
  controllers: [AttentionHourController],
  providers: [AttentionHourService],
})
export class AttentionHourModule {}
