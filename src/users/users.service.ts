import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private prismaService: PrismaService
  ){}

  async create(createUserDto: CreateUserDto) {
    const userFind = await this.prismaService.user.findUnique({
      where: {
        email: createUserDto.email
      }
    })

    if(userFind)
      return 'user already exist'

    return this.prismaService.user.create({data: createUserDto})
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  findOne(id: string) {
    return this.prismaService.user.findUnique({
      where: {
        id: id
      }
    });
  }

  findOneEmail(email: string) {
    return this.prismaService.user.findUnique({
      where:{
        email: email
      }
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    //const user = this.findOne(id)
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return this.prismaService.user.delete({
      where:{
        id: id
      }
    })
  }
}
