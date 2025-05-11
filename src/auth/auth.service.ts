import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcryptjs from 'bcryptjs'

@Injectable()
export class AuthService {
    constructor(
        private usersService:UsersService,
        private jwtService: JwtService
    ){}

    async signIn(email: string, password:string){
        /*const user = this.usersService.findOneEmail(email)
        if(!user){
            return {msg:"user not found"}
        }
        const pass = user.password
        const result = await bcryptjs.compare(password, pass)

        if(!result){
            throw new UnauthorizedException()
        }


        const payload = { email: user.email, name: user.name}
        return {access_token: await this.jwtService.signAsync(payload)}*/
    }
}
