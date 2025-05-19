import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto, SignInPatientDto } from './signInDto';
import { AuthGuard } from './auth.guard';
import { ApiBody } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiBody({type:SignInDto})
  signIn(@Body() signInDto: SignInDto){
    return this.authService.signIn(signInDto)
  }

  @HttpCode(HttpStatus.OK)
  @Post('login/patient')
  @ApiBody({type:SignInPatientDto})
  signInPatient(@Body() signInPatientDto: SignInPatientDto){
    return this.authService.signInPatient(signInPatientDto)
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req): any {
    return req.user;
  }
}
