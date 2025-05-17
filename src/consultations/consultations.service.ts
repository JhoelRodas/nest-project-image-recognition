import { Injectable } from '@nestjs/common';
import { CreateConsultationDto, CreateDiagnosisToConsultationDto, CreateTreatmentToConsultationDto } from './dto/create-consultation.dto';
import { UpdateConsultationDto } from './dto/update-consultation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ConsultationsService {
  constructor(private prismaService: PrismaService) {}

  create(createConsultationDto: CreateConsultationDto) {
    return this.prismaService.consultation.create({
      data:createConsultationDto
    });
  }

  addDiagnosisToConsultation(createDiagnosisToConsultationDto: CreateDiagnosisToConsultationDto){
    return this.prismaService.consultationDiagnosis.create({
      data: createDiagnosisToConsultationDto
    })
  }

  removeDiagnosisToConsultation(createDiagnosisToConsultationDto: CreateDiagnosisToConsultationDto){
    return this.prismaService.consultationDiagnosis.delete({
      where:{
        consultationId_diagnosisId:{
          consultationId: createDiagnosisToConsultationDto.consultationId,
          diagnosisId: createDiagnosisToConsultationDto.diagnosisId
        }
      }
    })
  }

  addTreatmentToConsultation(createTreatmentToConsultationDto: CreateTreatmentToConsultationDto){
    return this.prismaService.consultationTreatment.create({
      data: createTreatmentToConsultationDto
    })
  }

  removeTreatmentToConsultation(createTreatmentToConsultationDto: CreateTreatmentToConsultationDto){
    return this.prismaService.consultationTreatment.delete({
      where:{
        consultationId_treatmentId:{
          consultationId: createTreatmentToConsultationDto.consultationId,
          treatmentId: createTreatmentToConsultationDto.treatmentId
        }
      }
    })
  }

  findAll() {
    return this.prismaService.consultation.findMany();
  }

  findOne(id: string) {
    return this.prismaService.consultation.findFirst({
      where:{
        id:id
      }
    });
  }

  update(id: string, updateConsultationDto: UpdateConsultationDto) {
    return `This action updates a #${id} consultation`;
  }

  remove(id: string) {
    return this.prismaService.consultation.delete({
      where:{
        id:id
      }
    });
  }
}
