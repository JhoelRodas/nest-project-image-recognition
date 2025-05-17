import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TreatmentsService } from './treatments.service';
import { CreateTreatmentDto } from './dto/create-treatment.dto';
import { UpdateTreatmentDto } from './dto/update-treatment.dto';

@Controller('treatments')
export class TreatmentsController {
  constructor(private readonly treatmentsService: TreatmentsService) {}

  @Post()
  create(@Body() createTreatmentDto: CreateTreatmentDto) {
    return this.treatmentsService.create(createTreatmentDto);
  }

  @Get()
  findAll() {
    return this.treatmentsService.findAll();
  }

  @Get('treatment/:id')
  findAllByOrganization(@Param('id') id: string) {
    return this.treatmentsService.findAllByOrganization(id);
  }


  @Get('by-user-org')
  findByUserAndOrg(@Query('userId') userId: string, @Query('orgId') orgId: string) {
    return this.treatmentsService.findAllByUserAndOrganization(userId, orgId);
  }

  @Get('by-pat-org')
  findByPatientAndOrg(@Query('patId') patId: string, @Query('orgId') orgId: string) {
    return this.treatmentsService.findAllByPatientAndOrganization(patId, orgId);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.treatmentsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTreatmentDto: UpdateTreatmentDto) {
    return this.treatmentsService.update(id, updateTreatmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.treatmentsService.remove(id);
  }
}
