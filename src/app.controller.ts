import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { LoginDto } from './auth/dto/login.dto';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Post('auth/login')
  async login(@Body() login: LoginDto) {
    return this.authService.login(login);
  }
}
