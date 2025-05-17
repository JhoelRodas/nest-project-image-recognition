import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { DiagnosesService } from './diagnoses.service';
import { CreateDiagnosisDto } from './dto/create-diagnosis.dto';
import { UpdateDiagnosisDto } from './dto/update-diagnosis.dto';

@Controller('diagnoses')
export class DiagnosesController {
  constructor(private readonly diagnosesService: DiagnosesService) {}

  @Post()
  create(@Body() createDiagnosisDto: CreateDiagnosisDto) {
    return this.diagnosesService.create(createDiagnosisDto);
  }

  @Get()
  findAll() {
    return this.diagnosesService.findAll();
  }

  @Get('organization/:id')
  findAllByOrganization(@Param('id') id: string) {
    return this.diagnosesService.findAllByOrganization(id);
  }

  @Get('by-user-org')
  findByUserAndOrg(
    @Query('userId') userId: string,
    @Query('orgId') orgId: string,
  ) {
    return this.diagnosesService.findAllByUserAndOrganization(userId, orgId);
  }

  @Get('by-pat-org')
  findByPatientAndOrg(
    @Query('patId') patId: string,
    @Query('orgId') orgId: string,
  ) {
    return this.diagnosesService.findAllByPatientAndOrganization(patId, orgId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diagnosesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDiagnosisDto: UpdateDiagnosisDto,
  ) {
    return this.diagnosesService.update(id, updateDiagnosisDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diagnosesService.remove(id);
  }
}
