import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcryptjs from 'bcryptjs'

@Injectable()
export class UsersService {

  private users:User[] = []

  async create(createUserDto: CreateUserDto) {
    const hashed_password = await bcryptjs.hash(createUserDto.password, 10)
    this.users.push({...createUserDto,
      id: this.users.length + 1 ,
      password: hashed_password
    })
    return createUserDto;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(user => user.id === id);
  }

  findOneEmail(email: string) {
    return this.users.find(user => user.email === email);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id)
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
