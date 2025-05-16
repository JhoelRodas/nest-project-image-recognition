import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcryptjs from 'bcryptjs';
import { SignInDto } from './signInDto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto) {
    const user = await this.usersService.findOneEmail(signInDto.email);
    if (!user) {
      await this.usersService.create({email:signInDto.email,password:signInDto.password})
    }

    const payload = { email: signInDto.email };
    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
