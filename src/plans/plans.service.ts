import { Injectable } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PlansService {
  constructor(private prismaService: PrismaService) {}

  async create(createPlanDto: CreatePlanDto) {
    const plan = await this.findOneName(createPlanDto.name);
    if (!plan) return 'ya existe un plan con ese nombre';
    return this.prismaService.plan.create({
      data: createPlanDto,
    });
  }

  findAll() {
    return this.prismaService.plan.findMany();
  }

  findOne(id: string) {
    return this.prismaService.plan.findFirst({
      where: {
        id: id,
      },
    });
  }

  findOneName(name: string) {
    return this.prismaService.plan.findFirst({
      where: {
        name: name,
      },
    });
  }

  update(id: string, updatePlanDto: UpdatePlanDto) {
    return `This action updates a #${id} plan`;
  }

  remove(id: string) {
    return this.prismaService.plan.delete({
      where: {
        id: id,
      },
    });
  }
}
