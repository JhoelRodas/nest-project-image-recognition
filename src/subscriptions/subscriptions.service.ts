import { Injectable } from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SubscriptionsService {
  constructor(
    private prismaService: PrismaService
  ){}

  create(createSubscriptionDto: CreateSubscriptionDto) {
    return this.prismaService.subscription.create({
      data:{
        organizationId: createSubscriptionDto.organizationId,
        planId: createSubscriptionDto.planId,
        startDate: new Date(),
        endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)), // 1 mes
      }
    });
  }

  findAll() {
    return this.prismaService.subscription.findMany();
  }

  findAllByOrganization(organizationId: string){
    return this.prismaService.subscription.findMany({
      where:{
        organizationId: organizationId
      },
      include:{
        plan: true
      }
    })
  }

  findAllByUser(userEmail: string){
    return this.prismaService.subscription.findMany({
      where:{
        organization:{
          is:{
            hostUser: userEmail
          }
        }
      }
    })
  }

  findOne(id: string) {
    return this.prismaService.subscription.findFirst({
      where:{
        id:id
      }
    });
  }

  update(id: string, updateSubscriptionDto: UpdateSubscriptionDto) {
    return `This action updates a #${id} subscription`;
  }

  remove(id: string) {
    return this.prismaService.subscription.delete({
      where:{
        id: id
      }
    });
  }
}
