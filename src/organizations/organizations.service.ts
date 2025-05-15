import { Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrganizationsService {
  constructor(private prismaService: PrismaService) {}

  async create(createOrganizationDto: CreateOrganizationDto) {
    const organization = await this.prismaService.organization.create({
      data: createOrganizationDto,
    });

    return;
  }

  findAll() {
    return this.prismaService.organization.findMany();
  }

  findAllByUser(email: string) {
    return this.prismaService.organization.findMany({
      where: {},
    });
  }

  findOne(id: string) {
    return this.prismaService.organization.findFirst({
      where: {
        id: id,
      },
    });
  }

  update(id: string, updateOrganizationDto: UpdateOrganizationDto) {
    return `This action updates a #${id} organization`;
  }

  remove(id: string) {
    return this.prismaService.organization.delete({
      where: {
        id: id,
      },
    });
  }
}
