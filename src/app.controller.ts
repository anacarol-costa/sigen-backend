import { Controller, Get, Post, Request, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiExcludeController } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiExcludeController()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  redirect(@Res() res) {
    return res.redirect('/api');
  }

  //Controller
  @UseGuards(AuthGuard('local'))

  //Route Handler
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
}
