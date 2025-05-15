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
      return { msg: 'user not found' };
    }
    if(signInDto.auth_provider === 'email'){
        const pass = user.password || '';
        const result = await bcryptjs.compare(signInDto.password, pass);
    
        if (!result) {
          throw new UnauthorizedException();
        }
    }
    const payload = { email: user.email };
    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
